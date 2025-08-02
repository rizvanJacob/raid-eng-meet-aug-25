import dayjs from "dayjs";
import { readdirSync, readFileSync } from "fs";
import path from "path";
import { PrismaClient } from "../../generated/prisma/client";
import {
  findActiveBranchNames,
  findQueriesByActiveMembersByBranchName,
} from "./queries";
import { seedQueries, seedUsers } from "./seed";
import {
  exerciseSqlDir,
  queriesToSeed,
  sampleSqlDir,
  usersToSeed,
} from "./config";

export const prisma = new PrismaClient();

const benchmarkSeeding = async () => {
  const seedLabel = `Seeding completed in`;
  console.time(seedLabel);
  const users = await seedUsers(usersToSeed);
  const userIds = users.map(({ id }) => id);
  await seedQueries(queriesToSeed, userIds);
  console.timeEnd(seedLabel);
  console.log();
};

const benchmarkQueriesPerBranch = async (timesToRepeat: number) => {
  const branchNames = await findActiveBranchNames();
  const queries: (() => Promise<number>)[] = [];
  for (let i = 0; i < timesToRepeat; i++) {
    for (const name of branchNames) {
      queries.push(async () => {
        const start = dayjs();
        await findQueriesByActiveMembersByBranchName(name, undefined);
        return dayjs().diff(start);
      });
    }
  }
  const durationsMs = await limitConcurrentTasks(queries, 10);
  console.log(
    "Retrieved all queries by current users within each branch. Query performance: "
  );
  printDurationsStats(durationsMs);
  console.log();
};

const explainAnalyzeQueriesForFirstUser = async () => {
  const { name } = await prisma.branch.findFirstOrThrow();
  const printout = await prisma.$queryRawUnsafe(
    `EXPLAIN ANALYZE SELECT q.*
      FROM "Query" q
      JOIN "User" u ON q."userId" = u.id
      JOIN "Appointment" a ON a."userId" = u.id
      JOIN "Branch" b ON a."branchId" = b.id
      WHERE b.name = $1
      AND a."endDate" >= NOW();`,
    name
  );
  console.log(
    `(EXAMPLE) Query plan to find all Queries by Active Users for ${name} Branch:`
  );
  console.table(printout);
};

async function executeSqlFolder(folderPath: string) {
  const fullFolderPath = path.join(__dirname, folderPath);
  const files = readdirSync(fullFolderPath)
    .filter((file) => file.endsWith(".sql"))
    .sort();

  for (const file of files) {
    const sql = readFileSync(path.join(fullFolderPath, file), "utf-8").trim();

    if (!sql) continue;

    console.log(`Executing ${file}...`);
    await prisma.$executeRawUnsafe(sql);
  }
}

const main = async () => {
  const isSample = process.argv0 === "sample";

  prisma.$connect();
  await executeSqlFolder(isSample ? sampleSqlDir : exerciseSqlDir);

  console.log(`Seeds ${queriesToSeed} user queries with ${usersToSeed} users and benchmarks:
    1. Time taken to seed data (insertion)
    2. Time taken to retrieve queries from users by branch name (only current members)
    `);
  console.log(
    "==============================================================="
  );
  console.log();

  await benchmarkSeeding();
  await benchmarkQueriesPerBranch(1);
  await explainAnalyzeQueriesForFirstUser();

  console.log(
    "==============================================================="
  );
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const printDurationsStats = (durationsMs: number[]) => {
  if (durationsMs.length === 0) {
    console.error("No durations logged!");
    return;
  }
  durationsMs.sort((a, b) => a - b);

  const n = durationsMs.length;
  const avg = durationsMs.reduce((sum, val) => sum + val, 0) / n;

  const q1 = durationsMs[Math.floor(0.25 * (n - 1))];
  const q2 = durationsMs[Math.floor(0.5 * (n - 1))]; // median
  const q3 = durationsMs[Math.floor(0.75 * (n - 1))];

  console.log(`
    Count   : ${n}
    Min     : ${durationsMs[0]} ms  ${"*".repeat(
    Math.floor(durationsMs[0] / 100)
  )}
    1Q      : ${q1} ms ${"*".repeat(Math.floor(q1 / 100))}
    2Q (Med): ${q2} ms ${"*".repeat(Math.floor(q2 / 100))}
    3Q      : ${q3} ms ${"*".repeat(Math.floor(q3 / 100))}
    Max     : ${durationsMs[n - 1]} ms ${"*".repeat(
    Math.floor(durationsMs[n - 1] / 100)
  )}
    Avg     : ${avg.toFixed(0)} ms ${"*".repeat(Math.floor(avg / 100))}
  `);
};

const limitConcurrentTasks = async <T>(
  tasks: (() => Promise<T>)[],
  maxConcurrent: number
): Promise<T[]> => {
  const results: T[] = [];
  let currentIndex = 0;

  const runNext = async (): Promise<void> => {
    if (currentIndex >= tasks.length) return;
    const task = tasks[currentIndex++];
    const result = await task();
    results.push(result);
    await runNext();
  };

  const runners = Array.from(
    { length: Math.min(maxConcurrent, tasks.length) },
    runNext
  );
  await Promise.all(runners);
  return results;
};

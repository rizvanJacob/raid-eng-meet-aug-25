import dayjs from "dayjs";
import {
  findActiveBranchNames,
  findQueriesByActiveMembersByBranchName,
} from "./queries";
import {
  exerciseSqlDir,
  queriesToSeed,
  sampleSqlDir,
  usersToSeed,
} from "./config";
import { seedDatabase } from "./seed";
import { limitConcurrentTasks, printDurationsStats } from "./utils";
import { prisma, executeSqlFolder } from "./database";

const benchmarkSeeding = async () => {
  const seedLabel = `Seeding completed in`;
  console.time(seedLabel);
  await seedDatabase(usersToSeed, queriesToSeed);
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



const main = async () => {
  prisma.$connect();

  const isSample = process.argv[process.argv.length - 1] === "sample";
  await executeSqlFolder(isSample ? sampleSqlDir : exerciseSqlDir);
  console.log(
    "==============================================================="
  );

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


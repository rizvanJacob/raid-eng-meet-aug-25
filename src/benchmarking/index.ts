import { PrismaClient, Status } from "../../generated/prisma/client";
import {
  findActiveBranchNames,
  findQueriesByActiveMembersByBranchName,
} from "./queries";
import { seedQueries, seedUsers } from "./seed";

const USERS_TO_SEED = 600;
const QUERIES_TO_SEED = 100_000;
const QUERY_ROUNDS = 1;

export const prisma = new PrismaClient();

const benchmarkSeeding = async () => {
  const seedLabel = `Seeded ${USERS_TO_SEED + QUERIES_TO_SEED} rows in`;
  console.time(seedLabel);
  const users = await seedUsers(USERS_TO_SEED);
  const userIds = users.map(({ id }) => id);
  await seedQueries(QUERIES_TO_SEED, userIds);
  console.timeEnd(seedLabel);
  console.log();
};

const benchmarkQueriesPerBranch = async (
  timesToRepeat: number,
  intervalToPrint: number
) => {
  const branchNames = await findActiveBranchNames();
  const findQueriesLabel = `Retrieved queries for ${branchNames.length} branches in`;
  console.time(findQueriesLabel);
  let queryCount: number;
  let uniqueUserIds: Set<number>;

  for (let i = 0; i < timesToRepeat; i++) {
    const promises = branchNames.map((name) =>
      findQueriesByActiveMembersByBranchName(name)
    );
    const results = await Promise.all(promises);

    const queriesCompleted = i + 1;
    if (queriesCompleted % intervalToPrint === 0) {
      console.timeLog(
        findQueriesLabel,
        `(${queriesCompleted}/${timesToRepeat} rounds)`
      );
    }

    if (i === timesToRepeat - 1) {
      queryCount = results.reduce((prev, curr) => {
        return prev + curr.length;
      }, 0);
      uniqueUserIds = results.reduce<Set<number>>((prev, curr) => {
        curr.forEach((q) => {
          prev.add(q.userId);
        });
        return prev;
      }, new Set());
    }
  }
  console.timeEnd(findQueriesLabel);
  console.log(
    `Retrieved ${queryCount!} queries from ${uniqueUserIds!.size} unique users`
  );
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

  const sampleSize = 100;
  const result = await findQueriesByActiveMembersByBranchName(name, sampleSize);
  const parsedForTable = result
    .map((query) => {
      const appointmentInBranch = query.user.appointments.find(
        (a) => a.branch.name === name
      );
      return {
        queriedBy: query.user.fullName,
        query: query.content.substring(0, 10) + "...",
        status: query.status,
        appointment: appointmentInBranch?.title || "unknown",
        startDate: appointmentInBranch?.startDate.toDateString() || "unknown",
        endDate: appointmentInBranch?.endDate?.toDateString() || "unknown",
      };
    })
    .sort((a, b) => a.queriedBy.localeCompare(b.queriedBy));
  console.log(`(EXAMPLE) Query results of ${sampleSize} samples:`);
  console.table(parsedForTable);
};

const main = async () => {
  prisma.$connect();
  console.log(`Seeds ${QUERIES_TO_SEED} user queries with ${USERS_TO_SEED} users and benchmarks:
    1. Time taken to seed data (insertion)
    2. Time taken to retrieve queries from users by branch name (only current members)
    `);
  console.log(
    "==============================================================="
  );
  console.log();

  await benchmarkSeeding();
  await benchmarkQueriesPerBranch(QUERY_ROUNDS, 1);
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

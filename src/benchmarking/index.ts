import { PrismaClient } from "../../generated/prisma/client";
import { findQueriesByUser, findUsers } from "./queries";
import { seedQueries, seedUsers } from "./seed";

const USERS_TO_SEED = 300;
const QUERIES_TO_SEED = 100_000;

export const prisma = new PrismaClient();

const hasUserIdIndexOnQuery = async (): Promise<boolean> => {
  const indexes = (await prisma.$queryRawUnsafe(
    "SELECT indexname FROM pg_indexes WHERE schemaname = 'public' AND tablename = 'Query'"
  )) as { indexname: string }[];
  return (
    indexes.map(({ indexname }) => indexname).find((i) => i.includes("idx")) !=
    undefined
  );
};

const benchmarkSeeding = async () => {
  const seedLabel = `Seeded ${USERS_TO_SEED + QUERIES_TO_SEED} rows in`;
  console.time(seedLabel);
  const userIds = await seedUsers(USERS_TO_SEED);
  await seedQueries(QUERIES_TO_SEED, userIds);
  console.timeEnd(seedLabel);
  console.log();
};

const benchmarkQuerying = async (
  timesToRepeat: number,
  intervalToPrint: number
) => {
  const findQueriesLabel = `Retrieved queries by users ${timesToRepeat} times in`;
  console.time(findQueriesLabel);
  for (let i = 0; i < timesToRepeat; i++) {
    const userIds = await findUsers();
    const promises = userIds.map(({ id }) => findQueriesByUser(id));
    await Promise.all(promises);
    const queriesCompleted = i + 1;
    if (queriesCompleted % intervalToPrint === 0) {
      console.timeLog(
        findQueriesLabel,
        `(${queriesCompleted}/${timesToRepeat} rounds completed)`
      );
    }
  }
  console.timeEnd(findQueriesLabel);
  console.log();
};

const explainAnalyzeQueriesForFirstUser = async () => {
  const user = await prisma.user.findFirst({
    select: { id: true, fullName: true },
  });
  if (user === null) {
    console.error("Did not find any users");
    return;
  }
  const { id, fullName } = user;
  const printout = await prisma.$queryRawUnsafe(
    `EXPLAIN ANALYZE SELECT * FROM "Query" WHERE "userId" = $1`,
    id
  );
  console.log(`Query plan to select all Queries for User ${id} (${fullName}):`);
  console.table(printout);
};

const main = async () => {
  prisma.$connect();
  console.log(`Seeds ${QUERIES_TO_SEED} user queries with ${USERS_TO_SEED} users and benchmarks:
    1. Time taken to seed data (insertion)
    2. Time taken to retrieve queries by status
    3. Time taken to retrieve queries by user (queried by)
    `);
  console.log(
    "==============================================================="
  );
  console.log();

  await benchmarkSeeding();
  await benchmarkQuerying(20, 5);
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

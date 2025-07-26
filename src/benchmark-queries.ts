import { readFileSync } from "fs";
import { PrismaClient, Status } from "../generated/prisma/client";
import { faker } from "@faker-js/faker";
import path from "path";
import {
  createQuery,
  CreateQueryDataType,
  createUser,
  CreateUserDataType,
  IdType,
} from "./data-util";
import { time } from "console";

type SchemaDefinition = {
  table_schema: string;
  table_name: string;
  column_name: string;
  data_type: string;
};

const USERS_TO_SEED = 100;
const QUERIES_TO_SEED = 50_000;

const prisma = new PrismaClient();

const seedUsers = async (rows: number): Promise<IdType[]> => {
  const data: CreateUserDataType[] = [];
  for (let i = 0; i < rows; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    data.push(createUser());
  }
  return prisma.user.createManyAndReturn({
    data,
    select: {
      id: true,
    },
  });
};

const seedQueries = async (rows: number, userIds: IdType[]) => {
  const assignedRatio = 0.6;
  const assignedValues = [
    { value: true, weight: assignedRatio },
    { value: false, weight: 1 - assignedRatio },
  ];

  const canQueryRatio = 0.8;
  const canQueryCutoffIndex = Math.round(canQueryRatio * USERS_TO_SEED);
  const canQuery = userIds.slice(0, canQueryCutoffIndex).map(({ id }) => id);
  const canBeAssigned = userIds
    .slice(canQueryCutoffIndex, userIds.length - 1)
    .map(({ id }) => id);

  const data: CreateQueryDataType[] = [];

  for (let i = 0; i < rows; i++) {
    const isAssigned = faker.helpers.weightedArrayElement(assignedValues);
    data.push(createQuery(canQuery, canBeAssigned, isAssigned));
  }

  return prisma.query.createMany({ data });
};

const findQueriesByStatus = async (status: Status) => {
  return prisma.query.findMany({
    where: {
      status,
    },
    select: {
      id: true,
    },
  });
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

  const seedLabel = `Seeded ${USERS_TO_SEED + QUERIES_TO_SEED} rows in`;
  console.time(seedLabel);
  const userIds = await seedUsers(USERS_TO_SEED);
  await seedQueries(QUERIES_TO_SEED, userIds);
  console.timeEnd(seedLabel);
  console.log();

  const timesToQuery = 100;
  const queryAggregateLabel = `Retrieved queries by status ${timesToQuery} times in`;
  console.time(queryAggregateLabel);
  for (let i = 0; i < timesToQuery; i++) {
    for (const status of Object.values(Status)) {
      const retrieveByStatusLabel = `> Retrieved ${status} queries (single retrieval) in`;
      if (i === timesToQuery - 1) {
        console.time(retrieveByStatusLabel);
      }
      var queries = await findQueriesByStatus(status);
      if (i === timesToQuery - 1) {
        console.timeLog(retrieveByStatusLabel, `(${queries.length} rows)`);
      }
    }
  }
  console.timeEnd(queryAggregateLabel);

  console.log();
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

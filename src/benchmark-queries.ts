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

type SchemaDefinition = {
  table_schema: string;
  table_name: string;
  column_name: string;
  data_type: string;
};

const USERS_TO_SEED = 100;
const QUERIES_TO_SEED = 50_000;
const QUERIES_TO_ADD = 500;

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

const main = async () => {
  prisma.$connect();
  console.log(`Seeds ${QUERIES_TO_SEED} user queries with ${USERS_TO_SEED} users and benchmarks:
    1. Time taken to retrieve queries by status
    2. Time taken to retrieve queries by user (queried by)
    3. Time taken to insert ${QUERIES_TO_ADD} new queries`);

  const userIds = await seedUsers(USERS_TO_SEED);
  await seedQueries(QUERIES_TO_SEED, userIds);
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

import { readFileSync } from "fs";
import { PrismaClient, Status, User } from "../generated/prisma/client";
import { faker } from "@faker-js/faker";
import path from "path";

type SchemaDefinition = {
  table_schema: string;
  table_name: string;
  column_name: string;
  data_type: string;
};

const USERS_TO_SEED = 100;
const QUERIES_TO_SEED = 10_000;
const QUERIES_TO_ADD = 500;

const prisma = new PrismaClient();

type CreateUserData = {
  fullName: string;
  contact: string;
  email: string;
};

const seedUsers = async (rows: number): Promise<User[]> => {
  const data: CreateUserData[] = [];
  for (let i = 0; i < rows; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    data.push({
      fullName: faker.person.fullName({ firstName, lastName }),
      contact: faker.helpers.fromRegExp(/[89]\d{7}/),
      email: faker.internet.email({ firstName, lastName }),
    });
  }
  return prisma.user.createManyAndReturn({
    data,
  });
};
type CreateQueryData = {
  userId: number;
  assigneeId: number;
  content: string;
  status: Status;
};

const seedQueries = async (rows: number, users: User[]) => {
  const canQueryRatio = 0.8;
  const canQueryCutoffIndex = Math.round(canQueryRatio * USERS_TO_SEED);
  const canQuery = users.slice(0, canQueryCutoffIndex);
  const canBeAssigned = users.slice(canQueryCutoffIndex, users.length - 1);

  const data: CreateQueryData[] = [];

  return prisma.query.createMany({ data });
};

const benchmarkUserQuery = async () => {};

const main = async () => {
  prisma.$connect();
  console.log(`Seeds ${QUERIES_TO_SEED} user queries with ${USERS_TO_SEED} users and benchmarks:
    1. Time taken to retrieve queries by status
    2. Time taken to retrieve queries by user (queried by)
    3. Time taken to insert ${QUERIES_TO_ADD} new queries`);

  await seedData(10_000);
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

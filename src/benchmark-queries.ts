import { readFileSync } from "fs";
import { PrismaClient, Status } from "../generated/prisma/client";
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

type CreateUserDataType = {
  fullName: string;
  contact: string;
  email: string;
};

type idType = {
  id: number;
};

const seedUsers = async (rows: number): Promise<{ id: number }[]> => {
  const data: CreateUserDataType[] = [];
  for (let i = 0; i < rows; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    data.push({
      fullName: faker.person.fullName({ firstName, lastName }),
      contact: faker.phone.number({ style: "international" }),
      email: faker.internet.email({ firstName, lastName }),
    });
  }
  return prisma.user.createManyAndReturn({
    data,
    select: {
      id: true,
    },
  });
};
type CreateQueryDataType = {
  userId: number;
  assigneeId?: number;
  content: string;
  status: Status;
};

const seedQueries = async (rows: number, userIds: { id: number }[]) => {
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

  const assignedStatusValues = Object.values(Status).filter(
    (s) => s !== Status.unassigned
  );

  const data: CreateQueryDataType[] = [];

  let assigned = 0;
  let unassigned = 0;

  for (let i = 0; i < rows; i++) {
    const isAssigned = faker.helpers.weightedArrayElement(assignedValues);

    isAssigned ? assigned++ : unassigned++;

    data.push({
      userId: faker.helpers.arrayElement(canQuery),
      assigneeId: isAssigned
        ? faker.helpers.arrayElement(canBeAssigned)
        : undefined,
      content: faker.word.words({ count: { min: 150, max: 200 } }),
      status: isAssigned
        ? faker.helpers.arrayElement(assignedStatusValues)
        : Status.unassigned,
    });
  }

  console.log(
    `Seeding ${assigned} assigned and ${unassigned} unassigned queries`
  );
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

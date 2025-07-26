import { faker } from "@faker-js/faker";
import { Status } from "../../generated/prisma";
import { prisma } from ".";

type CreateQueryDataType = {
  userId: number;
  assigneeId?: number;
  content: string;
  status: Status;
};

type CreateUserDataType = {
  fullName: string;
  contact: string;
  email: string;
};

type IdType = {
  id: number;
};

const createUser = (): CreateUserDataType => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return {
    fullName: faker.person.fullName({ firstName, lastName }),
    contact: faker.phone.number({ style: "international" }),
    email: faker.internet.email({ firstName, lastName }),
  };
};

const assignedStatusValues = Object.values(Status).filter(
  (s) => s !== Status.unassigned
);

const createQuery = (
  userIds: number[],
  assigneeIds: number[],
  isAssigned: boolean
) => {
  return {
    userId: faker.helpers.arrayElement(userIds),
    assigneeId: isAssigned
      ? faker.helpers.arrayElement(assigneeIds)
      : undefined,
    content: faker.word.words({ count: { min: 150, max: 200 } }),
    status: isAssigned
      ? faker.helpers.arrayElement(assignedStatusValues)
      : Status.unassigned,
  };
};

export const seedUsers = async (rows: number): Promise<IdType[]> => {
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

export const seedQueries = async (rows: number, userIds: IdType[]) => {
  const assignedRatio = 0.6;
  const assignedValues = [
    { value: true, weight: assignedRatio },
    { value: false, weight: 1 - assignedRatio },
  ];

  const canQueryRatio = 0.8;
  const canQueryCutoffIndex = Math.round(canQueryRatio * userIds.length);
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

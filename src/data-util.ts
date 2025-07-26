import { faker } from "@faker-js/faker/.";
import { Status } from "../generated/prisma";

export type CreateQueryDataType = {
  userId: number;
  assigneeId?: number;
  content: string;
  status: Status;
};

export type CreateUserDataType = {
  fullName: string;
  contact: string;
  email: string;
};

export type IdType = {
  id: number;
};

export const createUser = (): CreateUserDataType => {
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

export const createQuery = (
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

import { faker } from "@faker-js/faker";
import { Prisma, Status } from "../../generated/prisma";
import { prisma } from ".";
import dayjs from "dayjs";

type IdType = {
  id: number;
};

const NUM_OF_BRANCHES = 30;
const DELETED_BRANCH_RATIO = 0.3;
const NUM_OF_TITLES = 15;
const TITLES: string[] = [];
for (let i = 0; i < NUM_OF_TITLES; i++) {
  TITLES.push(faker.person.jobType());
}

const createBranches = (
  branchCount: number,
  deletedBranchRatio: number
): Prisma.BranchCreateManyInput[] => {
  let branchNames: string[] = [];
  let counter = 0;
  while (branchNames.length < branchCount && counter < 10000) {
    branchNames.push(faker.person.jobArea());
    branchNames = faker.helpers.uniqueArray(branchNames, branchCount);
    counter++;
  }
  if (branchNames.length < branchCount) {
    console.error("Failed to generate enought unique branch names");
  }
  return branchNames.map((name) => {
    return {
      name,
      isDeleted: faker.helpers.weightedArrayElement([
        { value: true, weight: deletedBranchRatio },
        { value: false, weight: 1 - deletedBranchRatio },
      ]),
    };
  });
};

const createUser = (): Prisma.UserCreateManyInput => {
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
    content: faker.lorem.sentences({ min: 10, max: 15 }),
    status: isAssigned
      ? faker.helpers.arrayElement(assignedStatusValues)
      : Status.unassigned,
  };
};

const createAppointments = (
  userIds: number[],
  activeBranchIds: number[],
  deletedBranchIds: number[]
): Prisma.AppointmentCreateManyInput[] => {
  return userIds.map((userId) => {
    const branchId = faker.helpers.arrayElement([
      ...activeBranchIds,
      ...deletedBranchIds,
    ]);
    const isDeleted = deletedBranchIds.find((id) => branchId === id);
    const startDate = faker.date.between({
      from: dayjs().subtract(10, "year").toISOString(),
      to: dayjs().toISOString(),
    });
    const endDate = isDeleted
      ? faker.date.past()
      : dayjs(startDate)
          .add(faker.number.int({ min: 3, max: 4 }), "year")
          .add(faker.number.int(365), "day")
          .toDate();

    return {
      title: faker.helpers.arrayElement(TITLES),
      startDate,
      endDate,
      userId,
      branchId,
    };
  });
};

export const seedUsers = async (rows: number): Promise<IdType[]> => {
  const branches = await prisma.branch.createManyAndReturn({
    data: createBranches(NUM_OF_BRANCHES, DELETED_BRANCH_RATIO),
  });
  const activeBranchesIds = branches
    .filter((branch) => !branch.isDeleted)
    .map(({ id }) => id);
  const deletedBranchIds = branches
    .filter((branch) => branch.isDeleted)
    .map(({ id }) => id);

  const userData: Prisma.UserCreateManyInput[] = [];
  for (let i = 0; i < rows; i++) {
    userData.push(createUser());
  }
  const userIdObjects = await prisma.user.createManyAndReturn({
    data: userData,
    select: {
      id: true,
    },
  });
  const userIds = userIdObjects.map(({ id }) => id);

  await prisma.appointment.createManyAndReturn({
    data: createAppointments(userIds, activeBranchesIds, deletedBranchIds),
  });
  return userIdObjects;
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

  const data: Prisma.QueryCreateManyInput[] = [];

  for (let i = 0; i < rows; i++) {
    const isAssigned = faker.helpers.weightedArrayElement(assignedValues);
    data.push(createQuery(canQuery, canBeAssigned, isAssigned));
  }

  return prisma.query.createMany({ data });
};

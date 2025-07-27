import { faker } from "@faker-js/faker";
import { Prisma, Status } from "../../generated/prisma";
import { prisma } from ".";
import dayjs from "dayjs";

const NUM_OF_BRANCHES = 30;
//Ratio of deleted branches to active branches. Less than 1
const DELETED_BRANCH_RATIO = 0.1;
//Number of appointment titles
const NUM_OF_TITLES = 30;
//Oldest appointment start date in number of years ago
const APPOINTMENTS_SINCE_YEARS_AGO = 3;
const MIN_APPOINTMENT_DURATION_YEARS = 2;
const MAX_APPOINTMENT_DURATION_YEARS = 4;
//Ratio of queries to be assigned. Less than 1
const ASSIGNED_QUERIES_RATIO = 0.6;
//Ratio of users who can make queries to users who can be assigned queries. Less than 1
const CAN_QUERY_RATIO = 0.8;

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
      from: dayjs()
        .subtract(APPOINTMENTS_SINCE_YEARS_AGO, "year")
        .toISOString(),
      to: dayjs().toISOString(),
    });
    const endDate = isDeleted
      ? faker.date.past()
      : dayjs(startDate)
          .add(
            faker.number.int({
              min: MIN_APPOINTMENT_DURATION_YEARS,
              max: MAX_APPOINTMENT_DURATION_YEARS - 1,
            }),
            "year"
          )
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

export const seedUsers = async (rows: number) => {
  return await prisma.$transaction(async (tx) => {
    const branches = await tx.branch.createManyAndReturn({
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
    const userIdObjects = await tx.user.createManyAndReturn({
      data: userData,
    });
    const userIds = userIdObjects.map(({ id }) => id);

    await tx.appointment.createManyAndReturn({
      data: createAppointments(userIds, activeBranchesIds, deletedBranchIds),
    });
    return userIdObjects;
  });
};

export const seedQueries = async (rows: number, userIds: number[]) => {
  const assignedValues = [
    { value: true, weight: ASSIGNED_QUERIES_RATIO },
    { value: false, weight: 1 - ASSIGNED_QUERIES_RATIO },
  ];

  const canQueryCutoffIndex = Math.round(CAN_QUERY_RATIO * userIds.length);
  const canQuery = userIds.slice(0, canQueryCutoffIndex);
  const canBeAssigned = userIds.slice(canQueryCutoffIndex, userIds.length - 1);

  const data: Prisma.QueryCreateManyInput[] = [];

  for (let i = 0; i < rows; i++) {
    const isAssigned = faker.helpers.weightedArrayElement(assignedValues);
    data.push(createQuery(canQuery, canBeAssigned, isAssigned));
  }

  return prisma.query.createMany({ data });
};

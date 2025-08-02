import { da, faker } from "@faker-js/faker";
import { Prisma, Status } from "../../generated/prisma";
import { prisma } from ".";
import dayjs from "dayjs";
import { assignedQueriesRatio, canQueryRatio, deletedBranchRatio, maxApptDurationYears, minApptDurationYears, numBranches, numTitles, oldestApptYearsAgo } from "./config";

const TITLES: string[] = [];
for (let i = 0; i < numTitles; i++) {
  TITLES.push(faker.person.jobType());
}

const createBranches = (
  branchCount: number,
  deletedBranchRatio: number
): Prisma.BranchCreateManyInput[] => {
  let branchNames: string[] = [];
  let counter = 0;
  while (branchNames.length < branchCount && counter < 10000) {
    branchNames.push(`${faker.person.jobArea()} ${faker.location.city()}`);
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
    email: faker.internet.email({
      firstName,
      lastName,
      allowSpecialCharacters: true,
    }),
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
        .subtract(oldestApptYearsAgo, "year")
        .toISOString(),
      to: dayjs().toISOString(),
    });
    const endDate = isDeleted
      ? faker.date.past()
      : dayjs(startDate)
          .add(
            faker.number.int({
              min: minApptDurationYears,
              max: maxApptDurationYears - 1,
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
      data: createBranches(numBranches, deletedBranchRatio),
    });
    console.log(`> Seeded ${branches.length} branches`);
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
      skipDuplicates: true,
    });
    console.log(`> Seeded ${userData.length} users`);
    const userIds = userIdObjects.map(({ id }) => id);

    const { count: appointmentCount } = await tx.appointment.createMany({
      data: createAppointments(userIds, activeBranchesIds, deletedBranchIds),
    });
    console.log(`> Seeded ${appointmentCount} appointments`);
    return userIdObjects;
  });
};

export const seedQueries = async (rows: number, userIds: number[]) => {
  console.log(`> Seeding ${rows} queries...`);
  const assignedValues = [
    { value: true, weight: assignedQueriesRatio },
    { value: false, weight: 1 - assignedQueriesRatio },
  ];

  const canQueryCutoffIndex = Math.round(canQueryRatio * userIds.length);
  const canQuery = userIds.slice(0, canQueryCutoffIndex);
  const canBeAssigned = userIds.slice(canQueryCutoffIndex, userIds.length - 1);

  const createQueryDatas = (count: number) => {
    const data: Prisma.QueryCreateManyInput[] = [];
    for (let j = 0; j < count; j++) {
      const isAssigned = faker.helpers.weightedArrayElement(assignedValues);
      data.push(createQuery(canQuery, canBeAssigned, isAssigned));
    }
    return data;
  };

  var rowsPerRound = 100_000;
  var splitInto = Math.floor(rows / rowsPerRound);
  for (let i = 0; i < splitInto; i++) {
    const data = createQueryDatas(rowsPerRound);
    const { count } = await prisma.query.createMany({
      data,
      skipDuplicates: true,
    });
    console.log(`> > Seeded ${i * rowsPerRound + count} queries`);
  }
  var remainder = rows - rowsPerRound * splitInto;
  if (remainder > 0) {
    const data = createQueryDatas(rowsPerRound);
    await prisma.query.createMany({ data, skipDuplicates: true });
  }
  console.log(`> Seeded ${rows} queries`);
};

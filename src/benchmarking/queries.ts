import { prisma } from ".";
import { Prisma, Status } from "../../generated/prisma";

export const findUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
    },
  });
};

export const findQueriesByUser = async (userId: number) => {
  return prisma.query.findMany({
    where: { userId },
    select: {
      assignedTo: {
        select: {
          fullName: true,
        },
      },
      status: true,
      content: true,
    },
  });
};

export const findQueriesByStatus = async (status: Status) => {
  return await prisma.query.findMany({
    where: {
      status,
    },
    select: {
      id: true,
    },
  });
};

export const findActiveBranchNames = async () => {
  const result = await prisma.branch.findMany({
    where: { isDeleted: false },
    select: { name: true },
  });
  return result.map(({ name }) => name);
};

export const findQueriesByActiveMembersByBranchName = async (
  name: string,
  limit?: number
) => {
  const result = await prisma.query.findMany({
    where: {
      user: {
        appointments: {
          some: {
            branch: {
              name,
            },
            endDate: {
              gte: new Date(),
            },
          },
        },
      },
    },
    include: {
      user: {
        include: {
          appointments: {
            include: {
              branch: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
    take: limit,
  });
  return result;
};

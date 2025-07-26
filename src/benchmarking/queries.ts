import { prisma } from ".";
import { Status } from "../../generated/prisma";

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

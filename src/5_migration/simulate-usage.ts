import { faker } from "@faker-js/faker/.";
import { prisma } from "../database";
import { limitConcurrentTasks } from "../utils";

const main = async () => {
  prisma.$connect();
  const usersToUpdate = await prisma.user.findMany({
    select: {
      id: true,
    },
  });
  const userIdsToUpdate = usersToUpdate.map(({ id }) => id);
  const updateUser = (id: number) => {
    const lecternUserId = faker.string.hexadecimal({ length: 15 });
    return () => prisma.user.update({
      where: {
        id,
      },
      data: {
        lecternUserId,
      },
    } as any);  
    // Ignore type safety here as the ts will complain about the expand-contract schema here. 
    // In reality, prisma's type safety will ensure that your schema is in sync with your expand-contract steps.
  };
  const updateTasks = userIdsToUpdate.map(updateUser)
  await limitConcurrentTasks(updateTasks, 10)
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

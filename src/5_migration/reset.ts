import { prisma } from "../database";
import { queriesToSeed, usersToSeed } from "../config";
import { seedDatabase } from "../seed";

const main = async () => {
  prisma.$connect();

  console.log(
    "==============================================================="
  );

  console.log(`Seeds ${queriesToSeed} user queries with ${usersToSeed} users`);
  console.log(
    "==============================================================="
  );
  console.log();

  await seedDatabase(usersToSeed, queriesToSeed);

  console.log(
    "==============================================================="
  );
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

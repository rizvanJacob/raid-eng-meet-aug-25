import { prisma } from "../database";
import { usersToSeed } from "../config";
import { seedDatabase } from "../seed";
import { printLineBreak } from "../utils";

const main = async () => {
  prisma.$connect();

  printLineBreak();
  console.log(`Seeds ${usersToSeed} users`);
  console.log();

  await seedDatabase(usersToSeed, 0);
  printLineBreak();
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

import { PrismaClient } from "./generated/prisma/index";

const prisma = new PrismaClient();

const main = async () => {
  prisma.$connect();
  console.log("Connected to prisma client!");
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

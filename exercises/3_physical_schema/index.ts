import { readFileSync } from "fs";
import { PrismaClient } from "./generated/prisma/index";
import path from "path";

type SchemaDefinition = {
  table_schema: string;
  table_name: string;
  column_name: string;
  data_type: string;
};

const prisma = new PrismaClient();

const main = async () => {
  prisma.$connect();
  const sql = readFileSync(path.join(__dirname, "print-schema.sql"), "utf-8");
  var schemaPrintout = (await prisma.$queryRawUnsafe(
    sql
  )) as SchemaDefinition[];
  console.table(schemaPrintout, ["table_name", "column_name", "data_type"]);
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

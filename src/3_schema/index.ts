import { readFileSync } from "fs";
import path from "path";
import { prisma } from "../database";

type SchemaDefinition = {
  table_schema: string;
  table_name: string;
  column_name: string;
  data_type: string;
};


const printSchema = async () => {
  const sql = readFileSync(
    path.join(__dirname, "../sql/print-schema.sql"),
    "utf-8"
  );
  var schemaPrintout = (await prisma.$queryRawUnsafe(
    sql
  )) as SchemaDefinition[];
  console.table(schemaPrintout, ["table_name", "column_name", "data_type"]);
};

const main = async () => {
  prisma.$connect();
  await printSchema();
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

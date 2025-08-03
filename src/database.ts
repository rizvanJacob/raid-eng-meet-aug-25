import { PrismaClient } from "../generated/prisma";
import { readdirSync, readFileSync } from "fs";
import path from "path";

export const prisma = new PrismaClient();

export async function executeSqlFolder(folderPath: string) {
  const fullFolderPath = path.join(__dirname, folderPath);
  const files = readdirSync(fullFolderPath)
    .filter((file) => file.endsWith(".sql"))
    .sort();

  for (const file of files) {
    const sql = readFileSync(path.join(fullFolderPath, file), "utf-8").trim();

    if (!sql) continue;

    console.log(`Executing ${file}...`);
    await prisma.$executeRawUnsafe(sql);
  }
}

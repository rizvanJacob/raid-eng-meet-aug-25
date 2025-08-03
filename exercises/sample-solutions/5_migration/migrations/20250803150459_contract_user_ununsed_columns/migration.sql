/*
  Warnings:

  - You are about to drop the column `contact` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_contact_key";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "contact",
DROP COLUMN "email",
DROP COLUMN "fullName",
DROP COLUMN "passwordHash";

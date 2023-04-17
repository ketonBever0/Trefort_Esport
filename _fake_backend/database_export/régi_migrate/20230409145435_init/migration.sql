/*
  Warnings:

  - You are about to drop the column `lastLogin` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_memberOfClanId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastLogin",
ADD COLUMN     "lastLoginDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "registrationDate" DROP NOT NULL,
ALTER COLUMN "memberOfClanId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_memberOfClanId_fkey" FOREIGN KEY ("memberOfClanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

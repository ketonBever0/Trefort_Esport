/*
  Warnings:

  - You are about to drop the column `maxMemberCount` on the `sessionteams` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `competitions` ADD COLUMN `maxMemberCount` INTEGER NULL;

-- AlterTable
ALTER TABLE `sessionteams` DROP COLUMN `maxMemberCount`;

/*
  Warnings:

  - You are about to drop the column `sessionId` on the `sessionteams` table. All the data in the column will be lost.
  - Added the required column `teamName` to the `sessionteams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sessionteams` DROP COLUMN `sessionId`,
    ADD COLUMN `maxMemberCount` INTEGER NULL,
    ADD COLUMN `password` VARCHAR(255) NULL,
    ADD COLUMN `public` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `teamName` VARCHAR(255) NOT NULL;

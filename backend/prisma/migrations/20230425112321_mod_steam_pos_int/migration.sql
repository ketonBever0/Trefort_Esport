/*
  Warnings:

  - You are about to alter the column `position` on the `sessionteams` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Int`.

*/
-- AlterTable
ALTER TABLE `sessionteams` MODIFY `position` INTEGER NOT NULL;

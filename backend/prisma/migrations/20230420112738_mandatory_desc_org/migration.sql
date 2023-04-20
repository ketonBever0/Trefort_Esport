/*
  Warnings:

  - Made the column `description` on table `organizations` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `organizations` MODIFY `description` VARCHAR(255) NOT NULL;

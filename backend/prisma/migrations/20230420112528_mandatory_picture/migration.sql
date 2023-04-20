/*
  Warnings:

  - Made the column `picture` on table `organizations` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `organizations` MODIFY `picture` VARCHAR(255) NOT NULL;

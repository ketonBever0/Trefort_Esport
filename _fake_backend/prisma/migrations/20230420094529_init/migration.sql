/*
  Warnings:

  - Added the required column `header` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `header` VARCHAR(191) NOT NULL;

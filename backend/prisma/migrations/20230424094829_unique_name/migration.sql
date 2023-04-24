/*
  Warnings:

  - You are about to drop the column `sponsor` on the `events` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `events` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `sponsor`;

-- CreateIndex
CREATE UNIQUE INDEX `events_name_key` ON `events`(`name`);

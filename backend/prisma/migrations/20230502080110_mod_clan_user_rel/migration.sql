/*
  Warnings:

  - You are about to drop the column `userId` on the `clans` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[leaderId]` on the table `clans` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `leaderId` to the `clans` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `clans_userId_key` ON `clans`;

-- AlterTable
ALTER TABLE `clans` DROP COLUMN `userId`,
    ADD COLUMN `leaderId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `clans_leaderId_key` ON `clans`(`leaderId`);

-- AddForeignKey
ALTER TABLE `clans` ADD CONSTRAINT `clans_leaderId_fkey` FOREIGN KEY (`leaderId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

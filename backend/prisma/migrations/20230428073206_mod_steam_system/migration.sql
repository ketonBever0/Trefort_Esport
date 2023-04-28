/*
  Warnings:

  - You are about to drop the column `position` on the `sessionteams` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `sessionteams` table. All the data in the column will be lost.
  - Added the required column `points` to the `sessionteams` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `sessionteams` DROP FOREIGN KEY `sessionteams_userId_fkey`;

-- AlterTable
ALTER TABLE `sessionteams` DROP COLUMN `position`,
    DROP COLUMN `userId`,
    ADD COLUMN `points` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `sessionteamusers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `teamId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sessionteamusers` ADD CONSTRAINT `sessionteamusers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessionteamusers` ADD CONSTRAINT `sessionteamusers_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `sessionteams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

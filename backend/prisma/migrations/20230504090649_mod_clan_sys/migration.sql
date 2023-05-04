/*
  Warnings:

  - You are about to drop the column `clanId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_clanId_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `clanId`;

-- CreateTable
CREATE TABLE `clanusers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `clanId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clanusers` ADD CONSTRAINT `clanusers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clanusers` ADD CONSTRAINT `clanusers_clanId_fkey` FOREIGN KEY (`clanId`) REFERENCES `clans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

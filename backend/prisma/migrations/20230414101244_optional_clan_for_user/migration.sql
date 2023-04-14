-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_clanId_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `clanId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_clanId_fkey` FOREIGN KEY (`clanId`) REFERENCES `Clan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

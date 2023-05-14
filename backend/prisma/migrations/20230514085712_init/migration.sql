-- DropForeignKey
ALTER TABLE `sessionteamusers` DROP FOREIGN KEY `sessionteamusers_teamId_fkey`;

-- AlterTable
ALTER TABLE `sessionteams` ADD COLUMN `description` TEXT NULL;

-- AddForeignKey
ALTER TABLE `sessionteamusers` ADD CONSTRAINT `sessionteamusers_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `sessionteams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE `sessionteams` ADD COLUMN `clanId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `sessionteams` ADD CONSTRAINT `sessionteams_clanId_fkey` FOREIGN KEY (`clanId`) REFERENCES `clans`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

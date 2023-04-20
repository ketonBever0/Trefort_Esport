-- AlterTable
ALTER TABLE `user` ADD COLUMN `memberOfOrganizationId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_memberOfOrganizationId_fkey` FOREIGN KEY (`memberOfOrganizationId`) REFERENCES `Organization`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

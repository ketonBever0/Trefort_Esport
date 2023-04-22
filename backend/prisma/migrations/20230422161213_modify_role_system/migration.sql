/*
  Warnings:

  - You are about to drop the `permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rolepermissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `permissions` DROP FOREIGN KEY `permissions_id_fkey`;

-- DropForeignKey
ALTER TABLE `rolepermissions` DROP FOREIGN KEY `rolepermissions_roleId_fkey`;

-- DropTable
DROP TABLE `permissions`;

-- DropTable
DROP TABLE `rolepermissions`;

-- AddForeignKey
ALTER TABLE `userroles` ADD CONSTRAINT `userroles_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

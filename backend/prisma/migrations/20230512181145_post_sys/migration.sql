/*
  Warnings:

  - You are about to drop the column `text` on the `posts` table. All the data in the column will be lost.
  - Added the required column `content` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `header` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` DROP COLUMN `text`,
    ADD COLUMN `content` TEXT NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `header` VARCHAR(255) NOT NULL,
    ADD COLUMN `publishedAt` DATETIME(3) NULL,
    ADD COLUMN `title` VARCHAR(255) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

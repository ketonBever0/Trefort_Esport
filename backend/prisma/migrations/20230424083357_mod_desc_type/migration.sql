-- AlterTable
ALTER TABLE `competitions` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `events` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `organizations` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `description` TEXT NULL;

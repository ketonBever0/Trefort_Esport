-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2023 at 10:12 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trefort_esport_fake`
--
CREATE DATABASE IF NOT EXISTS `trefort_esport_fake` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `trefort_esport_fake`;

-- --------------------------------------------------------

--
-- Table structure for table `ban`
--

CREATE TABLE `ban` (
  `id` int(11) NOT NULL,
  `banStart` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `banEnd` datetime(3) NOT NULL,
  `reason` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clan`
--

CREATE TABLE `clan` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creatorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `competition`
--

CREATE TABLE `competition` (
  `id` int(11) NOT NULL,
  `plannedStartDate` datetime(3) NOT NULL,
  `startDate` datetime(3) DEFAULT NULL,
  `endDate` datetime(3) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `platform` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `registrationStart` datetime(3) DEFAULT NULL,
  `registrationEnd` datetime(3) NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eventId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDate` datetime(3) NOT NULL,
  `endDate` datetime(3) NOT NULL,
  `sponsor` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `organizationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE `organization` (
  `id` int(11) NOT NULL,
  `representativeId` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permission`
--

INSERT INTO `permission` (`id`, `name`, `description`) VALUES
(1, 'createPost', 'Létrehozhat bejegyzést.'),
(2, 'modifyTheirPost', 'Módosíthatja a saját bejegyzését.'),
(3, 'deleteTheirPost', 'Törölheti a saját bejegyzését.'),
(4, 'publishTheirPost', 'Publikálhatja a saját bejegyzését.'),
(5, 'createEvents', 'Létrehozhat eseményeket.'),
(6, 'deleteEvents', 'Lefújhat eseményeket.');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `published` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `authorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `content`, `published`, `createdAt`, `authorId`) VALUES
(1, 'Test Post1', '<p>Donec eget felis odio. Proin vehicula massa a tristique volutpat. Etiam lacinia porttitor purus. Praesent risus nisi, posuere vitae lacus non, auctor aliquam ipsum. Praesent scelerisque sodales purus sed tincidunt. Nulla ut velit ac dui maximus rutrum id ac leo. Donec pulvinar dolor non gravida malesuada. Nulla eleifend arcu tellus, eget faucibus erat lacinia non. Quisque aliquet urna risus, eget accumsan magna consectetur a. Cras dapibus tortor libero, ac egestas velit dapibus nec. Pellentesque at porttitor lectus, at malesuada lectus. Phasellus leo libero, interdum at nunc nec, pulvinar pretium purus.</p>', 0, '2023-04-19 19:17:59.606', 2),
(2, 'Lorem Ipsum', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ultricies turpis et hendrerit. Maecenas tortor magna, fermentum finibus vestibulum a, egestas ac mi. Nunc eleifend justo sed ipsum eleifend lobortis. Curabitur sed lobortis magna. Morbi sollicitudin elit ipsum, dictum sagittis risus pharetra non. Etiam et dictum quam. Quisque in nisl malesuada, laoreet quam nec, finibus est. Donec magna erat, sodales et mi nec, viverra semper erat. Vivamus lobortis, ante id bibendum semper, libero ex fringilla massa, eleifend commodo lectus dui ac ligula.</p><p>Sed eleifend elit risus, at dictum quam malesuada ac. Cras efficitur egestas est in placerat. Phasellus et lacus lobortis, laoreet lacus ac, auctor risus. Maecenas consequat, elit quis dapibus egestas, metus mauris ullamcorper urna, vitae lobortis arcu eros nec augue. Donec porttitor sit amet mi eu imperdiet. Morbi interdum elementum turpis eget vulputate. Cras nunc ipsum, fermentum eu neque in, tempus tempor sapien. Integer rhoncus eu nisi nec lobortis. Etiam in ante tempor, molestie urna vitae, bibendum orci.</p><p>Sed facilisis velit tincidunt mi vulputate, ac dapibus enim aliquet. Fusce laoreet nec augue ac ornare. Sed in felis ultrices, sollicitudin nunc non, rutrum ex. Morbi sed fermentum eros. Ut vestibulum rhoncus pulvinar. Duis efficitur mauris eu lorem feugiat fermentum. Sed tempor scelerisque blandit. Etiam hendrerit semper quam, a egestas est auctor non. Integer at nibh lacus. Donec pellentesque aliquet eros vel vulputate. Duis nec consequat ipsum. Phasellus vel placerat massa. Proin aliquet ornare consequat. Suspendisse tempus faucibus bibendum. Donec ac pulvinar turpis, ut vulputate tortor.</p><p>Praesent ut malesuada risus. Ut viverra lectus odio, id ullamcorper tellus fermentum nec. Curabitur hendrerit orci commodo massa vestibulum posuere. Maecenas dignissim, ligula sed vulputate finibus, nisi risus pellentesque odio, in hendrerit elit massa ut mauris. Mauris odio dui, faucibus vel ultricies at, dapibus at velit. Nunc a faucibus nunc. Phasellus rutrum at felis placerat ultricies. Vivamus tincidunt accumsan aliquam. In convallis velit sit amet fringilla maximus. Vestibulum et dui quis dolor laoreet euismod nec in diam. Aliquam placerat mi ut aliquet rhoncus. Ut sed leo aliquet ante auctor malesuada. Cras eu finibus neque, nec accumsan nunc. Proin efficitur ante vel euismod placerat. Mauris sit amet leo dui. Ut quis purus magna.</p><p>Aliquam pellentesque egestas lacus et aliquet. Nam non est vestibulum, convallis velit sit amet, ullamcorper lorem. Curabitur eu lorem facilisis, pulvinar lacus vel, ultrices leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sem mi, interdum at vestibulum et, ultrices sit amet nibh. Nam dignissim eu neque sit amet cursus. Proin lobortis nec neque ut rhoncus. Etiam accumsan elit sed justo maximus accumsan. Nulla mi nulla, varius quis risus ac, rutrum pellentesque est. In vehicula ante a ipsum suscipit elementum. Quisque non sollicitudin felis, sit amet tristique magna. Suspendisse at maximus ante. Donec dictum purus ac consectetur varius. Maecenas vehicula lectus sit amet risus ullamcorper finibus. Praesent feugiat non libero non condimentum. Morbi lobortis tempor gravida.</p>', 0, '2023-04-19 19:29:45.269', 2);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`, `description`) VALUES
(1, 'admin', 'Mindenhez is van joga!'),
(2, 'editor', NULL),
(3, 'organizer', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rolepermission`
--

CREATE TABLE `rolepermission` (
  `id` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `permissionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rolepermission`
--

INSERT INTO `rolepermission` (`id`, `roleId`, `permissionId`) VALUES
(3, 2, 1),
(4, 2, 2),
(5, 2, 3),
(6, 2, 4),
(7, 3, 5),
(8, 3, 6);

-- --------------------------------------------------------

--
-- Table structure for table `sessionteam`
--

CREATE TABLE `sessionteam` (
  `id` int(11) NOT NULL,
  `position` int(11) DEFAULT NULL,
  `competitionId` int(11) NOT NULL,
  `memberId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profilePicture` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `educationIdNum` int(11) DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `registrationDate` datetime(3) DEFAULT current_timestamp(3),
  `lastLoginDate` datetime(3) DEFAULT current_timestamp(3),
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `memberOfClanId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `username`, `password`, `profilePicture`, `firstName`, `lastName`, `address`, `educationIdNum`, `status`, `registrationDate`, `lastLoginDate`, `description`, `memberOfClanId`) VALUES
(1, 'johndoe@example.com', 'johndoe', '$2a$10$X3ynsBTBVhUsaJSv6hqfNO1yCpk7.G6wbcTsgSEllXxDPBOeHgKHi', NULL, 'John', 'Doe', 'no address', NULL, 'active', '2023-04-14 15:07:55.553', '2023-04-14 15:07:55.553', NULL, NULL),
(2, 'janedoe@example.com', 'janedoe', '$2a$10$/sVyfA9.VE2wh3ilmx6EDeLPEBp9Hl5gWXjYiLNbE8MBXt/cao7Ki', NULL, 'Jane', 'Doe', 'no address', NULL, 'active', '2023-04-14 15:08:28.920', '2023-04-14 15:08:28.920', NULL, NULL),
(3, 'testuser1@example.com', 'testuser1', '$2a$10$VrJbRRuIohS.j4ZTTJaWBuvzZhFPDG0tAG71L9hATerbZiRDEfQvW', NULL, 'Test', 'User', 'no address', NULL, 'active', '2023-04-14 16:36:08.013', '2023-04-14 16:36:08.013', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `userrole`
--

CREATE TABLE `userrole` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `userrole`
--

INSERT INTO `userrole` (`id`, `userId`, `roleId`) VALUES
(1, 2, 2),
(2, 1, 1),
(3, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('0fd7eff6-f4e4-4182-8ccc-7ff4b72c1801', '8a8d8384f89a77ad9aea6cb6ff8091fc5b59a534772ecbb3c54ec3449c16498f', '2023-04-17 06:12:32.147', '20230417061231_init', NULL, NULL, '2023-04-17 06:12:31.057', 1),
('7e28647e-7344-4567-841d-46a705782735', 'f53de43c3ed36ca70112ddae6aa6ae704b102fe79027bac977247ba9677695b6', '2023-04-19 19:12:24.723', '20230417061231_init', NULL, NULL, '2023-04-19 19:12:24.303', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ban`
--
ALTER TABLE `ban`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Ban_userId_fkey` (`userId`);

--
-- Indexes for table `clan`
--
ALTER TABLE `clan`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Clan_creatorId_key` (`creatorId`);

--
-- Indexes for table `competition`
--
ALTER TABLE `competition`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Competition_eventId_fkey` (`eventId`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Event_organizationId_fkey` (`organizationId`);

--
-- Indexes for table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Organization_representativeId_key` (`representativeId`),
  ADD UNIQUE KEY `Organization_email_key` (`email`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Permission_name_key` (`name`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Post_authorId_fkey` (`authorId`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Role_name_key` (`name`);

--
-- Indexes for table `rolepermission`
--
ALTER TABLE `rolepermission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `RolePermission_roleId_fkey` (`roleId`),
  ADD KEY `RolePermission_permissionId_fkey` (`permissionId`);

--
-- Indexes for table `sessionteam`
--
ALTER TABLE `sessionteam`
  ADD PRIMARY KEY (`id`),
  ADD KEY `SessionTeam_competitionId_fkey` (`competitionId`),
  ADD KEY `SessionTeam_memberId_fkey` (`memberId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD UNIQUE KEY `User_username_key` (`username`),
  ADD UNIQUE KEY `User_educationIdNum_key` (`educationIdNum`),
  ADD KEY `User_memberOfClanId_fkey` (`memberOfClanId`);

--
-- Indexes for table `userrole`
--
ALTER TABLE `userrole`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserRole_userId_fkey` (`userId`),
  ADD KEY `UserRole_roleId_fkey` (`roleId`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ban`
--
ALTER TABLE `ban`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clan`
--
ALTER TABLE `clan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `competition`
--
ALTER TABLE `competition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `organization`
--
ALTER TABLE `organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rolepermission`
--
ALTER TABLE `rolepermission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sessionteam`
--
ALTER TABLE `sessionteam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `userrole`
--
ALTER TABLE `userrole`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ban`
--
ALTER TABLE `ban`
  ADD CONSTRAINT `Ban_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `clan`
--
ALTER TABLE `clan`
  ADD CONSTRAINT `Clan_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `competition`
--
ALTER TABLE `competition`
  ADD CONSTRAINT `Competition_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `event` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `Event_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `organization` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `organization`
--
ALTER TABLE `organization`
  ADD CONSTRAINT `Organization_representativeId_fkey` FOREIGN KEY (`representativeId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `rolepermission`
--
ALTER TABLE `rolepermission`
  ADD CONSTRAINT `RolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `permission` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `RolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sessionteam`
--
ALTER TABLE `sessionteam`
  ADD CONSTRAINT `SessionTeam_competitionId_fkey` FOREIGN KEY (`competitionId`) REFERENCES `competition` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `SessionTeam_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `User_memberOfClanId_fkey` FOREIGN KEY (`memberOfClanId`) REFERENCES `clan` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `userrole`
--
ALTER TABLE `userrole`
  ADD CONSTRAINT `UserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UserRole_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

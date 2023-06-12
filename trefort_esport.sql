-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2023 at 11:07 PM
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
-- Database: `trefort_esport`
--
CREATE DATABASE IF NOT EXISTS `trefort_esport` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `trefort_esport`;

-- --------------------------------------------------------

--
-- Table structure for table `bans`
--

CREATE TABLE `bans` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bannedUntil` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clans`
--

CREATE TABLE `clans` (
  `id` int(11) NOT NULL,
  `leaderId` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `clanEmail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clanusers`
--

CREATE TABLE `clanusers` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `clanId` int(11) NOT NULL,
  `member` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `competitions`
--

CREATE TABLE `competitions` (
  `id` int(11) NOT NULL,
  `eventId` int(11) NOT NULL,
  `plannedStartDate` datetime(3) NOT NULL,
  `startDate` datetime(3) DEFAULT NULL,
  `endDate` datetime(3) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `maxMemberCount` int(11) DEFAULT NULL,
  `game` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `platform` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `registrationStart` datetime(3) DEFAULT NULL,
  `registrationEnd` datetime(3) NOT NULL,
  `competitionType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `competitions`
--

INSERT INTO `competitions` (`id`, `eventId`, `plannedStartDate`, `startDate`, `endDate`, `name`, `maxMemberCount`, `game`, `platform`, `registrationStart`, `registrationEnd`, `competitionType`, `description`) VALUES
(1, 1, '2023-06-09 08:00:00.000', NULL, NULL, 'League of Legends', 5, 'League of Legends', 'PC', '2023-05-20 00:00:00.000', '2023-06-05 00:00:00.000', '5v5', 'Draft'),
(2, 1, '2023-06-09 13:00:00.000', NULL, NULL, 'CS:GO', 5, 'Counter-strike: Global Offensive', 'PC', '2023-05-20 00:00:00.000', '2023-06-05 00:00:00.000', '5v5', 'Bomb planting');

-- --------------------------------------------------------

--
-- Table structure for table `eventcontributors`
--

CREATE TABLE `eventcontributors` (
  `id` int(11) NOT NULL,
  `orgId` int(11) NOT NULL,
  `eventId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDate` datetime(3) NOT NULL,
  `endDate` datetime(3) NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `startDate`, `endDate`, `location`, `description`) VALUES
(1, 'Teszt Verseny', '2023-06-09 00:00:00.000', '2023-06-12 00:00:00.000', '5650\nBékéscsaba\nPuskin tér\n1', 'Ez egy bajnokság'),
(2, 'BSZC Nemes Tihamér Technikum', '2023-09-12 00:00:00.000', '2023-09-15 00:00:00.000', '5600 Békéscsaba Kazinczy utca 7', '10 órakkor főbejárat');

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `name`, `picture`, `location`, `email`, `phoneNumber`, `type`, `status`, `description`) VALUES
(1, 'BSZC Trefort Ágoston Szakgimnáziuma', 'nincs még', '5600\nBékéscsaba\nPuskin tér\n1', 'taszi@bszc.hu', '66/444-511', 'Oktatási intézmény', 'pending', 'Ez egy sulie'),
(2, 'BSZC Nemes Tihamér Technikum', 'nincs még', '5600\nBékéscsaba\nKazinczy utca\n7', 'nemes@bszc.hu', '66/441-004', 'Oktatási intézmény', 'pending', 'Gészi');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `publishedAt` datetime(3) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `header` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessionteams`
--

CREATE TABLE `sessionteams` (
  `id` int(11) NOT NULL,
  `teamName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clanId` int(11) DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `competitionId` int(11) NOT NULL,
  `public` tinyint(1) DEFAULT 1,
  `points` int(11) DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessionteams`
--

INSERT INTO `sessionteams` (`id`, `teamName`, `clanId`, `password`, `competitionId`, `public`, `points`, `description`) VALUES
(4, 'csipet', NULL, '$argon2id$v=19$m=65536,t=3,p=4$qZcBUOBuJ2bXJO9BjlK1ow$b9tA64GCDHmIbMnUFnYxfZ+4FJR1aTYOd+U3EP/Wcfs', 1, 0, NULL, 'Legalább 10-es szintű legyél!'),
(5, 'test02 csapata', NULL, NULL, 1, 1, NULL, 'Legalább 50-es szint...\n'),
(6, 'csgo csapat', NULL, NULL, 1, 1, NULL, 'no wh'),
(7, 'csgo csapat', NULL, NULL, 2, 1, NULL, 'no wall hack'),
(9, 'csipet', NULL, NULL, 2, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessionteamusers`
--

CREATE TABLE `sessionteamusers` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `teamId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessionteamusers`
--

INSERT INTO `sessionteamusers` (`id`, `userId`, `teamId`) VALUES
(4, 1, 4),
(5, 2, 5),
(28, 3, 4),
(29, 4, 4),
(30, 5, 4),
(33, 7, 6),
(34, 7, 7),
(36, 5, 7),
(38, 2, 9);

-- --------------------------------------------------------

--
-- Table structure for table `userroles`
--

CREATE TABLE `userroles` (
  `id` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `orgId` int(11) DEFAULT NULL,
  `representative` tinyint(1) NOT NULL DEFAULT 0,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profilePicture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `educationNumber` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'active',
  `registrationDate` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `lastLogin` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `orgId`, `representative`, `username`, `profilePicture`, `email`, `firstName`, `lastName`, `password`, `address`, `educationNumber`, `status`, `registrationDate`, `lastLogin`, `description`) VALUES
(1, NULL, 0, 'TestUser01', NULL, 'testuser01@example.com', 'Test', 'User01', '$argon2id$v=19$m=65536,t=3,p=4$EiyG45pLQD50DLz4MVJRkw$dEm1oA3oNA33ayvG3ZyOUEoBwj/+qaUa33AmiDgn1C4', '1000\nBudapest\nVáci út\n69', '512312512', 'active', '2023-05-14 00:00:06.120', '2023-06-12 17:25:18.699', 'szia'),
(2, NULL, 0, 'TestUser02', NULL, 'testuser02@example.com', 'Test', 'User02', '$argon2id$v=19$m=65536,t=3,p=4$WUgNeEtta/lIsDVqnHaI1A$HSzC7tP1IGsvGZahvIiPdNBmUPCgQ7ztlFpMaPQlInE', 'postcode\ncity\nstreet\naddress', NULL, 'active', '2023-05-14 09:24:28.725', '2023-05-14 15:29:09.415', NULL),
(3, NULL, 0, 'TestUser03', NULL, 'testuser03@example.com', 'Test', 'User03', '$argon2id$v=19$m=65536,t=3,p=4$GIOf6nilhxRig7LKAdLloA$vwZ7FqWmhTzaF5s1Evh+oEf1Ut5JbGIwzcV3hjZNXZs', 'postcode\ncity\nstreet\naddress', '512342352', 'active', '2023-05-14 09:24:48.275', '2023-05-14 15:33:45.872', NULL),
(4, NULL, 0, 'TestUser04', NULL, 'testuser04@example.com', 'Test', 'User04', '$argon2id$v=19$m=65536,t=3,p=4$l/tVpF3BqH6eiT4Wwku6MQ$R0wjEKrzEgrdL7LvOL0HtKtwKzpe4v79WOX8joW4yAE', 'postcode\ncity\nstreet\naddress', NULL, 'active', '2023-05-14 09:24:59.816', '2023-05-14 12:13:02.131', NULL),
(5, NULL, 0, 'TestUser05', NULL, 'testuser05@example.com', 'Test', 'User05', '$argon2id$v=19$m=65536,t=3,p=4$1xTZmEHgwpI9UCwP1xXXGA$TuCjxz7DdMe67vDOYzfK+QmzeVaipFeHB/YtZw59QP0', 'postcode\ncity\nstreet\naddress', NULL, 'active', '2023-05-14 09:25:14.247', '2023-05-14 12:49:51.782', NULL),
(6, NULL, 0, 'TestUser06', NULL, 'testuser06@example.com', 'Test', 'User06', '$argon2id$v=19$m=65536,t=3,p=4$olpCACt/8LMjLjc1jNow5g$fjepYW6VT+HblILxns+wE/NnjRLQo4sgJmZ1aPHDPFE', 'postcode\ncity\nstreet\naddress', NULL, 'active', '2023-05-14 09:25:51.667', '2023-05-14 12:13:34.235', NULL),
(7, NULL, 0, 'TestUser07', NULL, 'testuser07@example.com', 'Test', 'User07', '$argon2id$v=19$m=65536,t=3,p=4$hxZWo8IF/dwgWwAtZs7x8w$ChV6XARhXQ9TRaM9fozK2DoGq+qAA9z6LdqBDAvwDkU', 'postcode\ncity\nstreet\naddress', '41235126213', 'active', '2023-05-14 09:26:26.464', '2023-05-14 14:01:09.466', NULL),
(8, NULL, 0, 'janeDoe', NULL, 'janedoe@example.com', 'Jane', 'Doe', '$argon2id$v=19$m=65536,t=3,p=4$3SVoDE69D782GdL0sqXK0w$BtI3/YlgoybueW96TvHYjcdy+f/fYKRy2FsqP1iJyQk', 'postCode\ncity\nstreet\naddress', '51234152', 'active', '2023-05-14 16:27:57.075', '2023-05-14 16:27:57.075', 'Szia mizu?'),
(9, NULL, 0, 'TestUser08', NULL, 'testuser08@example.com', 'Test', 'User08', '$argon2id$v=19$m=65536,t=3,p=4$OuS8jFvn0c7uNRrXN0E/LQ$XdqI5w9klPKDxkI2ljzvxow9HrYan6E4at/i9B9V8gs', 'PS\nexCity\nexStreet\n1', NULL, 'active', '2023-06-12 20:58:38.239', '2023-06-12 20:58:38.239', 'hello sziaaa');

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
('5a935bbe-c546-4e27-ac06-233a972ce06f', 'e22eafcc6ad80c241d5e3940aa5f4fac2cd1d9fb8dcd0efd859f097cb3feb229', '2023-05-14 08:57:06.855', '20230513230541_string_edu_number', NULL, NULL, '2023-05-14 08:57:06.846', 1),
('7b6d2aa6-6975-46e8-84cc-752d60fe3a0a', '22207ef7ae4f2add7688bff0e4cd59ba20882ab1ea4513559d4a22170614df43', '2023-05-13 23:53:29.132', '20230513235329_asd', NULL, NULL, '2023-05-13 23:53:29.102', 1),
('e3ff96c6-60d3-4762-ba75-97c981694bc3', '0500641edfdf38b18e78a7ca76903e716e7a47996b68a008df2247e43de94904', '2023-05-14 08:57:12.837', '20230514085712_init', NULL, NULL, '2023-05-14 08:57:12.761', 1),
('eac439e7-f63a-4f11-96b2-204c67fbdd14', '115556063cfc5511b43dcc8dd3162608138c0b45faf2942a10fbf511a1c31517', '2023-05-13 23:52:57.284', '20230513224940_init', NULL, NULL, '2023-05-13 23:52:56.710', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bans`
--
ALTER TABLE `bans`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `bans_userId_key` (`userId`);

--
-- Indexes for table `clans`
--
ALTER TABLE `clans`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `clans_leaderId_key` (`leaderId`);

--
-- Indexes for table `clanusers`
--
ALTER TABLE `clanusers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clanusers_userId_fkey` (`userId`),
  ADD KEY `clanusers_clanId_fkey` (`clanId`);

--
-- Indexes for table `competitions`
--
ALTER TABLE `competitions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `competitions_eventId_fkey` (`eventId`);

--
-- Indexes for table `eventcontributors`
--
ALTER TABLE `eventcontributors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `eventcontributors_orgId_fkey` (`orgId`),
  ADD KEY `eventcontributors_eventId_fkey` (`eventId`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `events_name_key` (`name`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `organizations_email_key` (`email`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_userId_fkey` (`userId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessionteams`
--
ALTER TABLE `sessionteams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessionteams_clanId_fkey` (`clanId`),
  ADD KEY `sessionteams_competitionId_fkey` (`competitionId`);

--
-- Indexes for table `sessionteamusers`
--
ALTER TABLE `sessionteamusers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessionteamusers_userId_fkey` (`userId`),
  ADD KEY `sessionteamusers_teamId_fkey` (`teamId`);

--
-- Indexes for table `userroles`
--
ALTER TABLE `userroles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userroles_roleId_fkey` (`roleId`),
  ADD KEY `userroles_userId_fkey` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_key` (`username`),
  ADD UNIQUE KEY `users_email_key` (`email`),
  ADD KEY `users_orgId_fkey` (`orgId`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bans`
--
ALTER TABLE `bans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clans`
--
ALTER TABLE `clans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clanusers`
--
ALTER TABLE `clanusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `competitions`
--
ALTER TABLE `competitions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `eventcontributors`
--
ALTER TABLE `eventcontributors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sessionteams`
--
ALTER TABLE `sessionteams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `sessionteamusers`
--
ALTER TABLE `sessionteamusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `userroles`
--
ALTER TABLE `userroles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bans`
--
ALTER TABLE `bans`
  ADD CONSTRAINT `bans_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `clans`
--
ALTER TABLE `clans`
  ADD CONSTRAINT `clans_leaderId_fkey` FOREIGN KEY (`leaderId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `clanusers`
--
ALTER TABLE `clanusers`
  ADD CONSTRAINT `clanusers_clanId_fkey` FOREIGN KEY (`clanId`) REFERENCES `clans` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `clanusers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `competitions`
--
ALTER TABLE `competitions`
  ADD CONSTRAINT `competitions_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `eventcontributors`
--
ALTER TABLE `eventcontributors`
  ADD CONSTRAINT `eventcontributors_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `eventcontributors_orgId_fkey` FOREIGN KEY (`orgId`) REFERENCES `organizations` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `sessionteams`
--
ALTER TABLE `sessionteams`
  ADD CONSTRAINT `sessionteams_clanId_fkey` FOREIGN KEY (`clanId`) REFERENCES `clans` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `sessionteams_competitionId_fkey` FOREIGN KEY (`competitionId`) REFERENCES `competitions` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `sessionteamusers`
--
ALTER TABLE `sessionteamusers`
  ADD CONSTRAINT `sessionteamusers_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `sessionteams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sessionteamusers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `userroles`
--
ALTER TABLE `userroles`
  ADD CONSTRAINT `userroles_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `userroles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_orgId_fkey` FOREIGN KEY (`orgId`) REFERENCES `organizations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

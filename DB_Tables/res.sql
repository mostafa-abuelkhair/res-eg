-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2023 at 07:12 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `res`
--

-- --------------------------------------------------------

--
-- Table structure for table `carousel`
--

CREATE TABLE `carousel` (
  `id` int(11) NOT NULL,
  `reference` varchar(500) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carousel`
--

INSERT INTO `carousel` (`id`, `reference`, `image`, `description`) VALUES
(1, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(2, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(3, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(4, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(5, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(6, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(7, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(8, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(9, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(10, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`) VALUES
(1, 'UPS');

-- --------------------------------------------------------

--
-- Table structure for table `featured`
--

CREATE TABLE `featured` (
  `id` int(11) NOT NULL,
  `reference` varchar(500) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `featured`
--

INSERT INTO `featured` (`id`, `reference`, `image`, `description`) VALUES
(1, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(2, 'solutions', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(3, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(4, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(5, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(6, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(7, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(8, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive'),
(9, 'product?id=1', 'p1.JPG', 'APC Easy UPS 1 Ph Line Interactive');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `phone` varchar(500) NOT NULL,
  `company` varchar(500) NOT NULL,
  `message` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `phone`, `company`, `message`) VALUES
(2, 'fasfas', 'fasfas', 'fasfasf', 'asfasfs', 'asfasf'),
(3, 'adfasf', 'asfasfas', 'asfasfas', 'fasf', 'fasf');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `part_number` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `short_description` varchar(100) NOT NULL,
  `category_id` int(30) NOT NULL,
  `price` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `part_number`, `image`, `description`, `short_description`, `category_id`, `price`) VALUES
(1, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(2, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(3, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(4, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(5, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(6, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(7, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(8, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(9, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(10, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(11, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(12, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(13, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(14, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0),
(15, 'srv10ki', 'srv10ki.JPG', 'APC Easy UPS On-Line, 10kVA/10kW, Tower, 230V, Hard wire 3-wire(1P+N+E) outlet, Intelligent Card Slot, LCD', 'APC Easy UPS On-Line, 10kVA/10kW', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `products_specifications`
--

CREATE TABLE `products_specifications` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `title_id` varchar(50) NOT NULL,
  `name_id` varchar(50) NOT NULL,
  `value` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products_specifications`
--

INSERT INTO `products_specifications` (`id`, `product_id`, `title_id`, `name_id`, `value`) VALUES
(1, 1, '10', '1', 'High quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions.'),
(2, 1, '1', '2', '2min 52s'),
(3, 1, '1', '3', '230 V'),
(4, 1, '1', '4', '220 V'),
(5, 1, '1', '5', '230 V'),
(6, 1, '1', '6', '220 V'),
(7, 1, '1', '7', '10000 W'),
(8, 1, '1', '8', '10000 VA'),
(9, 1, '1', '9', 'Hard wire 3-wire (1P + N + E) 1'),
(10, 1, '2', '10', 'Lead-acid battery'),
(11, 1, '2', '11', '192 V'),
(12, 1, '2', '12', '5 h'),
(13, 1, '2', '13', '3…5 year(s)'),
(14, 1, '2', '14', '235 W rated'),
(15, 1, '4', '15', 'Black (RAL 7010)'),
(16, 1, '4', '16', '68.5 cm'),
(17, 1, '4', '17', '19 cm'),
(18, 1, '4', '18', '44.7 cm'),
(19, 1, '4', '19', '65 kg'),
(20, 1, '4', '20', 'Front'),
(21, 1, '4', '21', 'No preference'),
(22, 1, '4', '22', 'Not rack-mountable'),
(23, 1, '4', '23', 'Yes'),
(24, 1, '5', '24', '110...300 V 60 % load'),
(25, 1, '5', '25', '1 hard wire 3-wire (1P + N + E)'),
(26, 1, '5', '26', '40...70 Hz auto sensing'),
(27, 1, '6', '27', '10000 VA'),
(28, 1, '6', '28', '10000 W'),
(29, 1, '6', '29', '50/60 Hz +/- 3 Hz sync to mains'),
(30, 1, '6', '30', '1 %'),
(31, 1, '6', '31', 'Double conversion online'),
(32, 1, '6', '32', 'Sine wave'),
(33, 1, '6', '34', 'Configurable for 220 : 230 or 240 nominal output voltage'),
(34, 1, '6', '35', 'Internal bypass (automatic and manual)'),
(35, 1, '6', '36', '3 : 1'),
(36, 1, '7', '37', '0…40 °C'),
(37, 1, '7', '38', '0…95 % non-condensing'),
(38, 1, '7', '39', '0...3000 m'),
(39, 1, '7', '40', '-15…60 °C'),
(40, 1, '7', '41', 'IP20'),
(41, 1, '7', '42', 'Alarm when on battery : distinctive low battery alarm : overload continuous tone alarm'),
(42, 1, '7', '43', 'Yes'),
(43, 1, '7', '44', 'Multifunction LCD status and control console'),
(44, 1, '8', '45', '600 J'),
(45, 1, '9', '46', '2 years repair or replace');

-- --------------------------------------------------------

--
-- Table structure for table `specifications_names`
--

CREATE TABLE `specifications_names` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specifications_names`
--

INSERT INTO `specifications_names` (`id`, `name`) VALUES
(1, 'Presentation'),
(2, 'Run time for full load'),
(3, 'Main Input Voltage'),
(4, 'Other Input Voltage'),
(5, 'Main Output Voltage'),
(6, 'Other Output Voltage'),
(7, 'rated power in W'),
(8, 'Rated power in VA'),
(9, 'Output connector type'),
(10, 'Battery type'),
(11, 'Battery voltage'),
(12, 'Battery recharge time'),
(13, 'Battery life'),
(14, 'Battery charger power'),
(15, 'Colour'),
(16, 'Height'),
(17, 'Width'),
(18, 'Depth'),
(19, 'Product weight'),
(20, 'Mounting location'),
(21, 'Mounting preference'),
(22, 'Mounting mode'),
(23, 'USB compatible'),
(24, 'Input voltage limits'),
(25, 'Number of input connectors'),
(26, 'Network frequency'),
(27, 'Maximum configurable power in VA'),
(28, 'Maximum configurable power in W'),
(29, 'Output frequency'),
(30, 'Harmonic distortion'),
(31, 'UPS type'),
(32, 'Wave type'),
(33, 'Efficiency--'),
(34, 'Additional information'),
(35, 'bypass type'),
(36, 'Crest factor'),
(37, 'Ambient air temperature for operation'),
(38, 'Relative humidity'),
(39, 'Operating altitude'),
(40, 'Ambient air temperature for storage'),
(41, 'IP degree of protection'),
(42, 'Alarm'),
(43, 'Emergency power off'),
(44, 'Control panel'),
(45, 'Surge energy rate'),
(46, 'Warranty');

-- --------------------------------------------------------

--
-- Table structure for table `specifications_titles`
--

CREATE TABLE `specifications_titles` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specifications_titles`
--

INSERT INTO `specifications_titles` (`id`, `title`) VALUES
(1, 'Main'),
(2, 'Batteries & Runtime'),
(3, 'General'),
(4, 'Physical'),
(5, 'Input'),
(6, 'Output'),
(7, 'Environmental'),
(8, 'Surge Protection and Filtering'),
(9, 'Contractual warranty'),
(10, 'Overview');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `subscriber` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`subscriber`) VALUES
(''),
('fasfas'),
('fasfasf'),
('mostafa.ahmed2509@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carousel`
--
ALTER TABLE `carousel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `featured`
--
ALTER TABLE `featured`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products_specifications`
--
ALTER TABLE `products_specifications`
  ADD PRIMARY KEY (`id`,`product_id`);

--
-- Indexes for table `specifications_names`
--
ALTER TABLE `specifications_names`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specifications_titles`
--
ALTER TABLE `specifications_titles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD UNIQUE KEY `subscriber` (`subscriber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carousel`
--
ALTER TABLE `carousel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `featured`
--
ALTER TABLE `featured`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `products_specifications`
--
ALTER TABLE `products_specifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `specifications_names`
--
ALTER TABLE `specifications_names`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `specifications_titles`
--
ALTER TABLE `specifications_titles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

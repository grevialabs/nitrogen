CREATE DATABASE apinode;

USE apinode;

CREATE TABLE IF NOT EXISTS api_keys (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `key` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

INSERT INTO api_keys (`id`, `key`, `description`, `created_at`) VALUES
	(1, 'keyfordevelopment', 'a key for development purpose', '2018-11-25 20:07:43'),
	(2, 'asu63sd7sd97sd0sdasd8sd91', 'a key for user production', '2018-11-25 20:07:43');


-- Dumping structure for table adiepw_api.api_users
CREATE TABLE IF NOT EXISTS api_users (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

INSERT INTO api_users (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
	(1, 'adie', 'me@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-24 09:44:00', NULL),
	(2, 'Samsul', 'samsul@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-27 15:40:59', NULL),
	(3, 'Wati', 'wati@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-27 15:41:19', NULL),
	(4, 'Dayat', 'dayat@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-27 15:41:26', NULL),
	(6, 'Asep', 'asep@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-27 15:41:39', NULL),
	(7, 'Bongki', 'bongki@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-27 15:41:49', NULL),
	(8, 'Kokam', 'kokam@adie.pw', 'e807f1fcf82d132f9bb018ca6738a19f', '2018-11-27 18:17:15', NULL),
	(9, 'Suhendra', 'hendra@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-27 18:22:39', NULL),
	(10, 'Maulana', 'maul@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-27 18:24:24', NULL),
	(11, 'Bembi', 'bembi@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-27 18:25:54', NULL),
	(12, 'Hadi', 'hadi@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-27 18:28:47', NULL),
	(13, 'Hendra', 'hendra@adie.pw', 'e10adc3949ba59abbe56e057f20f883e', '2018-11-27 18:34:06', NULL);

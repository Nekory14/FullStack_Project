--
-- To create database --
--

CREATE DATABASE IF NOT EXISTS `fullstack_project_db`;
USE `fullstack_project_db`;

--
-- Drop tables if they exist --
--

DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `type_user`;

--
-- Create table type_user --
--

CREATE TABLE `type_user` (
    `id` int NOT NULL AUTO_INCREMENT,
    `type` varchar(45) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `unique_type` (`type`),
    INDEX `idx_type` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Create table user --
--

CREATE TABLE `user` (
    `id` int NOT NULL AUTO_INCREMENT,
    `type_user` varchar(45),
    `name` varchar(45) NOT NULL,
    `first_name` varchar(45) NOT NULL,
    `email` varchar(45) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `unique_email` (`email`),
    CONSTRAINT `FK_TYPE_USER` FOREIGN KEY (`type_user`) REFERENCES `type_user` (`type`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
DROP DATABASE chat;


CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'User'
-- 
-- ---

DROP TABLE IF EXISTS `user`;
    
CREATE TABLE `user` (
  `id` INTEGER(5) AUTO_INCREMENT,
  `username` VARCHAR(20),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'chatRoom'
-- 
-- ---

DROP TABLE IF EXISTS `chatRoom`;
    
CREATE TABLE `chatRoom` (
  `id` INTEGER(5) AUTO_INCREMENT,
  `roomname` VARCHAR(10),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messageTable'
-- 
-- ---

DROP TABLE IF EXISTS `messageTable`;
    
CREATE TABLE `messageTable` (
  `id` INTEGER(5) AUTO_INCREMENT,
  `timeStamp` TIMESTAMP(6),
  `user_ID` INTEGER(5),
  `room_ID` INTEGER(5),
  `text` VARCHAR(200),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'user_room'
-- 
-- ---

DROP TABLE IF EXISTS `user_room`;
    
CREATE TABLE `user_room` (
  `user_ID` INTEGER(5),
  `room_ID` INTEGER(5)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messageTable` ADD FOREIGN KEY (user_ID) REFERENCES `user` (`id`);
ALTER TABLE `messageTable` ADD FOREIGN KEY (room_ID) REFERENCES `chatRoom` (`id`);
ALTER TABLE `user_room` ADD FOREIGN KEY (user_ID) REFERENCES `user` (`id`);
ALTER TABLE `user_room` ADD FOREIGN KEY (room_ID) REFERENCES `chatRoom` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `chatRoom` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messageTable` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user_room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `User` (`id`,`userName`) VALUES
-- ('','');
-- INSERT INTO `chatRoom` (`id`,`roomName`) VALUES
-- ('','');
-- INSERT INTO `messageTable` (`id`,`timeStamp`,`user_ID`,`room_ID`,`messageText`) VALUES
-- ('','','','','');
-- INSERT INTO `user_room` (`user_ID`,`room_ID`) VALUES
-- ('','');
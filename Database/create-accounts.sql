-- -----------------------------------------------------
-- Schema full-stack-ecommerce
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-battleship`;

CREATE SCHEMA `full-stack-battleship`;
USE `full-stack-battleship` ;

-- -----------------------------------------------------
-- Table `full-stack-battleship`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-battleship`.`account` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(255) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `password` VARCHAR(255) DEFAULT NULL,
  `played_games` INT(11) DEFAULT NULL,
  `won_games` INT(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;
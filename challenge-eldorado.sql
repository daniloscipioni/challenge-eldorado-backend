CREATE TABLE `heroku_ecd2cdd291b0ba0`.`tbl_category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `heroku_ecd2cdd291b0ba0`.`tbl_device` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_category` INT NULL,
  `color` VARCHAR(16) NULL,
  `part_number` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_CATEGORIA_idx` (`id_category` ASC),
  CONSTRAINT `FK_CATEGORIA`
    FOREIGN KEY (`id_category`)
    REFERENCES `heroku_ecd2cdd291b0ba0`.`tbl_category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

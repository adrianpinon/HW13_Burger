CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
devour BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (id)
);

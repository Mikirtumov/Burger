CREATE DATABASE IF NOT EXISTS burger_db;

USE burger_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOL DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger' FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger' FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Pizza Burger' FALSE);
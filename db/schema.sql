DROP DATABASE IF EXISTS foundation_form;

CREATE DATABASE foundation_form;

USE foundation_form;

CREATE TABLE foundation_form (
	id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(50) NOT NULL,
    organization_name VARCHAR(50) NOT NULL,
    website_url VARCHAR(50) NOT NULL,
    number_of_hits INT NOT NULL,
    PRIMARY KEY(id)
);

DROP DATABASE IF EXISTS foodapp;
CREATE DATABASE foodapp;

\c foodapp;

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone INTEGER NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  salt VARCHAR(255),
  pass VARCHAR(255) NOT NULL
);
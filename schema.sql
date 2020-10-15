DROP DATABASE IF EXISTS foodapp;
CREATE DATABASE foodapp;

\c foodapp;

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(100) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  pass VARCHAR(255) NOT NULL
);
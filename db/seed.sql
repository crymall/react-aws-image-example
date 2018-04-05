DROP DATABASE IF EXISTS names;
CREATE DATABASE names;

\c names;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR
);

INSERT INTO users (username)
  VALUES ('Tyler'), ('Shannon'), ('Richard');
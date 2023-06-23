CREATE DATABASE SE_Linkedin;
\c SE_Linkedin

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  name TEXT,
  message TEXT,
  skills TEXT
);

INSERT INTO posts(name, message, skills)
VALUES
  ('Gurpreet', 'Software engg. Course', 'JavaScript'),
  ('Wenhui', 'Immersive Course', 'Python');

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);
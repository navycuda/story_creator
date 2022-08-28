/*
\i db/schema/build.sql
*/
DROP DATABASE
IF EXISTS
  story_creator
;
DROP USER
IF EXISTS
  story_creator
;
CREATE DATABASE
  story_creator
;
CREATE USER
  story_creator
  WITH PASSWORD '1701'
;
GRANT ALL PRIVILEGES ON DATABASE
  story_creator
  TO
  story_creator
;


-- \i db/schema/01_users.sql;

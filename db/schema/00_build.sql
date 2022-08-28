/*
\i db/schema/build.sql
*/
-- \c navycuda navycuda;
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
-- \c story_creator story_creator;
-- \i db/schema/01_users.sql;
-- \i db/schema/02_stories.sql;
-- \i db/schema/03_contributors.sql;
-- \i db/schema/04_characters.sql;
-- \i db/schema/05_event_types.sql;
-- \i db/schema/06_events.sql;
-- \i db/schema/07_votes.sql;

/*
\i db/schema/04_characters.sql
*/
DROP TABLE IF EXISTS
  characters CASCADE
;
CREATE TABLE
  characters (
    id SERIAL PRIMARY KEY NOT NULL,
    story_id INTEGER REFERENCES
      stories(id)
      ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    details TEXT
  )
;

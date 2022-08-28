/*
\i db/schema/02_contributors.sql
*/
DROP TABLE IF EXISTS
  contributors CASCADE
;
CREATE TABLE
  contributors (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES
      users(id)
      ON DELETE CASCADE,
    story_id INTEGER REFERENCES
      stories(id)
      ON DELETE CASCADE
  )
;

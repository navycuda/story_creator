/*
\i db/schema/03_stories.sql
*/
DROP TABLE IF EXISTS
  stories CASCADE
;
CREATE TABLE
  stories (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    owner_id INTEGER REFERENCES
      users(id)
      ON DELETE CASCADE,
    created_at TIMESTAMP,
    started_at TIMESTAMP,
    completed_at TIMESTAMP
  )
;

/*
\i db/schema/07_votes.sql
*/
IF EXISTS DROP TABLE
  votes CASCADE
;
CREATE TABLE
  votes (
    id SERIAL PRIMARY KEY NOT NULL,
    event_id INTEGER REFERENCES
      events(id)
      ON DELETE CASCADE,
    owner_id INTEGER REFERENCES
      users(id)
      ON DELETE CASCADE,
    story_id INTEGER REFERENCES
      stories
      ON DELETE CASCADE,
    up_votes INTEGER,
    dn_votes INTEGER
  )

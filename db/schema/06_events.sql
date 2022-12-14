/*
\i db/schema/05_events.sql
*/
DROP TABLE IF EXISTS
  events CASCADE
;
CREATE TABLE
  events (
    id SERIAL PRIMARY KEY NOT NULL,
    story_id INTEGER REFERENCES
      stories(id)
      ON DELETE CASCADE,
    owner_id INTEGER REFERENCES
      users(id)
      ON DELETE CASCADE,
    event_type_id INTEGER REFERENCES
      event_types(id)
      ON DELETE CASCADE,
    name VARCHAR(255),
    details TEXT,
    created_at TIMESTAMP,
    accepted_at TIMESTAMP
  )
;

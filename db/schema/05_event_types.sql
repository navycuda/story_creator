/*
\i db/schema/event_types.sql
*/
IF EXISTS DROP TABLE
  event_types CASCADE
;
CREATE TABLE
  event_types (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    details TEXT
  )
;

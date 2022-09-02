// db/queries/stories.js
const db = require('../connection');

const getStories = () => {
  const query = `
    SELECT
      *
    FROM
      stories
    ;
  `;
  return db.query(query)
    .then((stories) => {
      return stories.rows;
    });
};

const getStoriesWithLimit = (limit = 10) => {
  const query = `
    SELECT
      *
    FROM
      stories
    LIMIT
      $1
    ;
  `;
  const vars = [ Number(limit) ];
  return db.query(query, vars)
    .then((stories) => {
      return stories.rows;
    });
};

const getStoryById = (id) => {
  const query = `
    SELECT
      *
    FROM
      stories
    WHERE
      stories.id = $1
    LIMIT
      1
    ;
  `;
  const vars = [ Number(id) ];
  return db.query(query, vars)
    .then((story) => {
      return story.rows[0];
    });
};

const getStoriesByUserId = (id, limit = 10) => {
  const query = `
    SELECT
      *
    FROM
      stories
    WHERE
      owner_id = $1
    GROUP BY
      stories.id
    LIMIT
      $2
    ;
  `;
  const vars = [ Number(id), Number(limit) ];
  return db.query(query, vars)
    .then(stories => {
      return stories.rows;
    });
};

module.exports = {
  getStories,
  getStoriesWithLimit,
  getStoryById,
  getStoriesByUserId
};

// routes/stories-api.js
const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

const getStoriesByUserId = (id) => {
  const query = `
    SELECT
      *
    FROM
      stories
    WHERE
      owner_id = $1
    GROUP BY
      stories.id
    ;
  `;
  const vars = [ Number(id) ];
  return db.query(query, vars)
    .then(stories => {
      return stories.rows;
    });
};

// db/queries/stories.js
const db = require('../connection');

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

module.exports = {
  getStoriesByUserId
};

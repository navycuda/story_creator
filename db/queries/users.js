const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};
/**
 *
 * @param {Integer} id database id of the user
 * @returns a single user, if they exist
 */
const getUser = (id) => {
  const query = `
    SELECT
      *
    FROM
      users
    WHERE
      users.id = $1
    ;
  `;
  const vars = [ id ];
  return db.query(query, vars)
    .then(data => {
      return data.rows[0];
    });
};
module.exports = { getUsers };

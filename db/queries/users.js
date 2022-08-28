const db = require('../connection');

const getUsers = () => {
  return db.pool('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };

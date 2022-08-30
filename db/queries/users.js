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
  console.log(`  getUser(${id})`);
  const query = `
    SELECT
      *
    FROM
      users
    WHERE
      users.id = $1
    ;
  `;

  const vars = [ Number(id) ];
  return db.query(query, vars)
    .then(data => {
      const result = data.rows[0];
      console.log(result);

      return data.rows[0];
    });
};
const getUserByRequest = async(request) => {
  const id = request.session.id;
  console.log(`getUserByRequest id : `, id)
  const user = await getUser(id);
  if (!user) {
    return null;
  }
  return user;
};

module.exports = {
  getUsers,
  getUser,
  getUserByRequest
};

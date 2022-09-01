/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
// const userQueries = require('../../../db/queries/users');
// const {
//   User,
//   Story
// } = require('../../../db/models/htmlModels');

const errorMsg = (error) => {
  return {error: error.message};
};

console.log('something else happen?');

router.route('/')
  .get((request, response) => {
    response.render('./partials/_footer');
  });



// router.get('/', (req, res) => {
//   userQueries.getUsers()
//     .then(users => {
//       res.json({ users });
//     })
//     .catch(error => {
//       res
//         .status(500)
//         .json(errorMsg(error));
//     });
// });
// router.get('/:id', (request, response) => {
//   const id = request.params.id;
//   console.log(`get api/users/:id`, id);
//   userQueries.getUser(Number(id))
//     .then((user) => {
//       console.log(`get api/users/:id <user>`, user);
//       response.json({ user });
//     })
//     . catch((error) => {
//       response
//         .status(500)
//         .json(errorMsg(error));
//     });
// });
module.exports = router;

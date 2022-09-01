const express = require('express');
const router  = express.Router();
const userQueries = require('../../../db/queries/userQueries');

const errorMsg = (error) => {
  return {error: error.message};
};

console.log('something else happen?');

router.route('/')
  .get((request, response) => {
    userQueries.getUsers()
      .then((users) => {
        response.json({ users });
      })
      .catch((error) => {
        response
          .status(500)
          .json(errorMsg(error));
      });
  });

router.route('/:id')
  .get((request, response) => {
    const id = request.params.id;
    userQueries.getUser(Number(id))
      .then((user) => {
        response.json({ user });
      })
      .catch((error) => {
        response
          .status(500)
          .status(errorMsg(error));
      });
  });
module.exports = router;

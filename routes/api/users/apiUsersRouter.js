const express = require('express');
const router  = express.Router();
const userQueries = require('../../../db/queries/userQueries');
const { setTemplateVars }  = require('../../../tools');

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


router.route('/bio')
  .get(async(request, response) => {
    const templateVars = await setTemplateVars(request);

    console.log("Uhhh?");


    response.render('./partials/users/_userBio', templateVars);

  });

router.route('/bio/:id')
  .get((request, response) => {
    const templateVars = setTemplateVars(request);

    const id = request.params.id;
    userQueries.getUser(Number(id))
      .then((user) => {
        response.render('./partials/users/_userBio', { user });
      })
      .catch((error) => {
        response
          .status(500)
          .status(errorMsg(error));
      });


    response.render('./partials/users/_userBio', templateVars);

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

const express = require('express');
const router  = express.Router();
const storyQueries = require('../../../db/queries/storyQueries');

const errorMsg = (error) => {
  return {error: error.message};
};


router.route('/')
  .get((request, response) => {
    storyQueries.getStories()
      .then((stories) => {
        response.json(stories);
      })
      .catch((error) => {
        response.json(errorMsg(error));
      });
  });


router.route('/limit=:limit')
  .get((request, response) => {
    storyQueries.getStoriesWithLimit(Number(request.params.limit))
      .then((stories) => {
        response.json(stories);
      })
      .catch((error) => {
        response.json(errorMsg(error));
      });
  });


router.route('/new')
  .get((request, response) => {

    response.render('partials/stories/_storyPage');

  });

router.route('/popular')
  .get((request, response) => {

    response.render('partials/stories/_storyPage');

  });

router.route('/mine/:id')

  .get((request, response) => {

    response.render('partials/stories/_storyPage');

  });
module.exports = router;

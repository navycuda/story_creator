// routes/stories-api.js
const express = require('express');
const router  = express.Router();
const storiesQueries = require('../db/queries/stories');

const errorMsg = (error) => {
  return {error: error.message};
};

router.get('/', (request, response) => {
  storiesQueries.getStories()
    .then((stories) => {
      response.json({ stories });
    })
    .catch((error) => {
      response
        .status(500)
        .json(errorMsg(error));
    });


});

router.get('/:id', (request, response) => {
  storiesQueries.getStoriesByUserId(request.params.id)
    .then((stories) => {
      console.log(stories);
      response.json(stories);
    })
    .catch((error) => {
      response
        .status(500)
        .json(errorMsg(error));
    });
});
module.exports = router;

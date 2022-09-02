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

    const templateVars = {

      storyPage: {
        title: 'New',
        storyBlocks: [
          {
            left: {
              id: 1,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 1,
              contributions: 1
            },
            middle: {
              id: 2,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 1,
              contributions: 1
            },
            right: {
              id: 3,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 1,
              contributions: 1
            },
          },
          {
            left: {
              id: 4,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 1,
              contributions: 1
            },
            middle: {
              id: 5,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 1,
              contributions: 1
            },
            right: {
              id: 6,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 1,
              contributions: 1
            },
          },
          {
            left: {
              id: 7,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 1,
              contributions: 1
            },
            middle: {
              id: 8,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 1,
              contributions: 1
            },
            right: {
              id: 9,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 1,
              contributions: 1
            },
          }
        ]
      }
    };

    response.render('partials/stories/_storyPage', templateVars);

  });

router.route('/popular')
  .get((request, response) => {

    const templateVars = {

      storyPage: {
        title: 'Popular'
      }


    };

    response.render('partials/stories/_storyPage', templateVars);

  });

router.route('/mine/:id')

  .get((request, response) => {

    const templateVars = {

      storyPage: {
        title: 'My Stories'
      }


    };

    response.render('partials/stories/_storyPage', templateVars);

  });
module.exports = router;

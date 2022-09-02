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

router.route('/id=:id')
  .get((request, response) => {
    response.render('partials/stories/_story');
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
              likes: 2,
              contributions: 1
            },
            right: {
              id: 3,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 3,
              contributions: 1
            },
          },
          {
            left: {
              id: 4,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 4,
              contributions: 1
            },
            middle: {
              id: 5,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 5,
              contributions: 1
            },
            right: {
              id: 6,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 6,
              contributions: 1
            },
          },
          {
            left: {
              id: 7,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 7,
              contributions: 1
            },
            middle: {
              id: 8,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 8,
              contributions: 1
            },
            right: {
              id: 9,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 9,
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
        title: 'Popular',
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
              likes: 2,
              contributions: 1
            },
            right: {
              id: 3,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 3,
              contributions: 1
            },
          },
          {
            left: {
              id: 4,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 4,
              contributions: 1
            },
            middle: {
              id: 5,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 5,
              contributions: 1
            },
            right: {
              id: 6,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 6,
              contributions: 1
            },
          },
          {
            left: {
              id: 7,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 7,
              contributions: 1
            },
            middle: {
              id: 8,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 8,
              contributions: 1
            },
            right: {
              id: 9,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 9,
              contributions: 1
            },
          }
        ]
      }


    };

    response.render('partials/stories/_storyPage', templateVars);

  });

router.route('/mine/:id')

  .get((request, response) => {

    const templateVars = {

      storyPage: {
        title: 'My Stories',
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
              likes: 2,
              contributions: 1
            },
            right: {
              id: 3,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 3,
              contributions: 1
            },
          },
          {
            left: {
              id: 4,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 4,
              contributions: 1
            },
            middle: {
              id: 5,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 5,
              contributions: 1
            },
            right: {
              id: 6,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 6,
              contributions: 1
            },
          },
          {
            left: {
              id: 7,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 7,
              contributions: 1
            },
            middle: {
              id: 8,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 8,
              contributions: 1
            },
            right: {
              id: 9,
              title: 'The never ending nest',
              description: 'A story about a nest that overflows with golden eggs',
              likes: 9,
              contributions: 1
            },
          }
        ]
      }


    };

    response.render('partials/stories/_storyPage', templateVars);

  });



module.exports = router;

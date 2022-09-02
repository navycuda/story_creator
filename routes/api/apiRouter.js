// routes/api/index.js
const express = require('express');
const router  = express.Router();


const apiUsersRoutes = require('./users/apiUsersRouter');
const apiStoriesRoutes = require('./stories/apiStoriesRouter');

router.use('/users', apiUsersRoutes);
router.use('/stories', apiStoriesRoutes);

console.log("something happened??");

router.route('*')
  .get((request, response) => {
    response
      .status(404)
      .send('bad path');
  });


module.exports = router;

// routes/api/index.js
const express = require('express');
const router  = express.Router();


const apiUsersRoutes = require('./users/apiUsersRouter');
router.use('/users', apiUsersRoutes);

console.log("something happened??");

router.route('/')
  .get((request, response) => {
    response.render('./partials/_footer');
  });


module.exports = router;

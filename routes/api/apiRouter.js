// routes/api/index.js
const express = require('express');
const app = express();
const router  = express.Router();




router.route('/')
  .get((request, response) => {
    response.render('./partials/_footer');
  });


module.exports = router;

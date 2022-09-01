const express = require('express');
const router  = express.Router();

const errorMsg = (error) => {
  return {error: error.message};
};


router.route('/')
  .get((request, response) => {
    response.send('Stuff happened here.  I wish I knew what.');
  });
module.exports = router;

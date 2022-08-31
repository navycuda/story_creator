const express = require("express");
const router = express.Router();

router.get("/popular", (req, res) => {
  // const templateVars
  res.render("popular");
});

module.exports = router;

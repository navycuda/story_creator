const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  // const templateVars
  if (email && password) res.render("myStories");
});
module.exports = router;

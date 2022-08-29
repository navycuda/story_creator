const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const { route } = require("./users-api");

router.get("/", (req, res) => {
  res.render("registration");
});

/// to add new user to database
router.post("/", (req, res) => {
  const { name, password } = req.body;
  if (user && password) {
    db.query(
      `INSERT INTO users (name, password) VALUES ('${name}', '${password} ')`
    ).then((result) => {
      console.log("++++++", result.rows);
    });

    //   res.status(201).render("popular");
    // } catch (err) {
    console.log(err);
  }
});

module.exports = router;

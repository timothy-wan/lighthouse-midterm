"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers) => {

  router.get("/", (req, res) => {
    helpers.getUserData().then((users) => {
      res.json(users);
    })
  });

  return router;
}

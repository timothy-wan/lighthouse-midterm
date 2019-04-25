"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers) => {

  router.get("/", (req, res) => {
    helpers.getUserData((err, users) => {
      if(err) {
        console.error(err);
      }
      res.json(users);
    });
  });

  return router;
}

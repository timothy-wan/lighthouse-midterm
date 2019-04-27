"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers) => {

  router.get("/", (req, res) => {
    helpers.getFoodData().then((result) => {
      res.json(result);
    })
  });
  
  return router;
}
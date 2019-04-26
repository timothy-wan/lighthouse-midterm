"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers) => {

  router.get("/", (req, res) => {
    helpers.getFoodData((err, result) => {
      if(err) {
        console.error(err);
      }
      res.json(result);
    })
  });
  
  return router;
}
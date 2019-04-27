"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers) => {

  router.get("/", (req, res) => {
    helpers.getOrdersData().then((orders) => {
      res.json(orders);
    });
  });

  return router;
}
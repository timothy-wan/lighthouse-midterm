"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers) => {

  router.get("/", (req, res) => {
    helpers.getOrdersData((err, orders) => {
      console.log(orders)
      if(err) {
        console.error(err);
      }
      res.json(orders);
    })
  });

  return router;
}
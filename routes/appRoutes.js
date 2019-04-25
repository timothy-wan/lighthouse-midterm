"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers) => {

  router.get("/", (req, res) => {
    res.render("index");
  });
  
  router.get("/menu", (req, res) => {
    helpers.getFoodData((err, foods) => {
      if(err) {
        console.error(err);
      }
      foods.forEach((food) => {
        console.log(food);
        console.log(`id: ${food.id}`);
      });
    })
    res.render("menu");
  });
  
  router.get("/cart", (req, res) => {
    res.render("checkout");
  })

  return router;
}
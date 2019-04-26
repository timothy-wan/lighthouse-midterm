"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers) => {

  router.get("/", (req, res) => {
    res.render("index");
  });

  router.get("/menu", (req, res) => {
    let category = req.query.category;
    helpers.getFoodData((err, foods) => {
      if(err) {
        console.error(err);
      }
      let templateVars = {
        foodsList: foods,
        category: category
      }
      res.render("menu", templateVars);
    })
  });

  router.get("/cart", (req, res) => {
    res.render("checkout");
  })

  router.get("/add", (req, res) => {
    helpers.insertOrder(4, 1)
    res.redirect('/orders');
  })

  router.get("/orders", (req, res) => {
    helpers.getOrdersData((err, orders) => {
      if(err) {
        console.error(err);
      }
      res.json(orders);
    })
  })

  return router;
}
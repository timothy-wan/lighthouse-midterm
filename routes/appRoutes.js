"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers) => {

  router.get("/", (req, res) => {
    res.render("index");
  });

  router.get("/menu", (req, res) => {
    let category = req.query.category;
    if (!category) category = 'fish';
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

  router.get("/orders/:id", (req, res) => {
    helpers.getOrder(req.params.id, (err, order)=>{
      if(err) {
        console.error(err);
        return;
      }

      const templateVars = {
        order: order[0]
      }

      if (order) {
        res.render("pending", templateVars);
      } else {
        res.status(404).send('Invalid order #')
      }
    });
  });

  return router;
}
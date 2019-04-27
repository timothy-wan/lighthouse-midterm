"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers, client, msgRes) => {
  router.get("/", (req, res) => {
    client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+16042600721',
     to: '+17783193398'
   })
  .then(message => console.log(message.sid));
    res.render("index");
  });
  
  router.post('/sms', (req, res) => {
    const twiml = new msgRes();
  
    twiml.message('The Robots are coming! Head for the hills!');
  
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
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
  
  router.post("/cart", (req, res) => {
    const orderID = helpers.generateRandomString();
    helpers.insertOrder(orderID, 1);
    req.body.cart.forEach((item) => {
      console.log(item);
    })
    res.redirect('/cart');
  });
  router.get("/cart", (req, res) => {
    res.render("checkout");
  })

  router.get("/orders/:id", (req, res) => {
    helpers.getOrdersData((err, orders) => {
      if(err) {
        console.error(err)
      }
      let templateVars = {
        order: orders.filter(order => order.id === Number(req.params.id))
      }
      res.render("pending", templateVars)
    })
  });

  return router;
}
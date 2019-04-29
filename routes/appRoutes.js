"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers, client, msgRes) => {
  router.get("/", (req, res) => {
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
    helpers.getFoodData().then((foods) => {
      let templateVars = {
        foodsList: foods,
        category: category
      }
      res.render("menu", templateVars);
    })
  });

  let orderID = 1;

  router.post("/cart", (req, res) => {
    let valuesToInsert = [];
    let newUser = helpers.getRandomInt(3);
    let newOrder = helpers.insertOrder(orderID, newUser);
    newOrder.then(() => {
      req.body.cart.forEach((item) => {
        let value = {};
        value.quantity = item.quantity;
        value.ordersid = orderID;
        value.foodsid = item.id;
        valuesToInsert.push(value);
      });
      let result = helpers.insertFoodForOrder(valuesToInsert);
      result.then(() => { 
        client.messages.create({
          body: `You have a new order request! Please check your admin page!`,
          from: '+16042600721',
          to: '+17783193398'
        }).then(() => {
          console.log('message sent');
        });
        res.json({
          result: true,
          url: `http://localhost:8080/orders/${orderID}`
        });
        orderID++;
      });
    });
  });

  router.get("/cart", (req, res) => {
    res.render("checkout");
  })

  router.get("/orders/:id", (req, res) => {
    let orderInfo = helpers.getOrder(req.params.id);
    orderInfo.then((result) => {
      let templateVars = {};
      if(result) {
        let orderID = result[0].id;
        let getCart = helpers.getCartData(orderID);
          getCart.then((cart) => {
            templateVars.order = result[0];
            templateVars.cart = cart;
            res.render("pending", templateVars);
          })
      } else {
          res.status(404).send('Invalid order #')
      }
    })
  });

  router.post("/orders/:id", (req, res) => {
    helpers.alterOrderStatus(req.params.id, req.body.ETA)
      .then(() => {
        res.redirect('/admin');
        client.messages.create({
          body: `Your order will be ready in ${req.body.ETA} minutes!`,
          from: '+16042600721',
          to: '+17783193398'
        }).then(() => {
          console.log('message sent');
        });
    })
  });
  
  router.post("/orders/:id/delete", (req, res) => {
    helpers.cancelOrder(req.params.id)
      .then(() => {
        client.messages.create({
          body: `We are sorry, your order has been cancelled!`,
          from: '+16042600721',
          to: '+17783193398'
        }).then(() => {
          console.log('message sent');
        });
        res.redirect("/admin");
      })
  })

  router.get("/admin", (req, res) => {
    helpers.getPendingOrders().then((orders) => {
      let templateVars = {
        orders : orders
      }
      res.render('admin', templateVars);
    })
  })

  return router;
}
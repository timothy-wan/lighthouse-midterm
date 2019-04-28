"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (helpers) => {

  router.get("/", (req, res) => {
    helpers.getUserData().then((users) => {
      res.json(users);
    })
  });

  router.post("/:id", (req, res) => {
    res.send(req.params.id)
  })

  return router;
}

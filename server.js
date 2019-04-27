"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const accountSid  = process.env.TWILIO_SID;
const authToken   = process.env.TWILIO_TOKEN;
const client      = require('twilio')(accountSid, authToken);
const msgRes = require('twilio').twiml.MessagingResponse;
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const helpers     = require('./data/helpers')(knex);

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users")(helpers);
const foodRoutes = require("./routes/foods")(helpers);
const ordersRoutes = require("./routes/orders")(helpers);

// Seperate Routes for App into different module
const appRoutes = require("./routes/appRoutes")(helpers, client, msgRes);

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/orders", ordersRoutes);
app.use('/', appRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log("Crab juice stand started on " + PORT);
});

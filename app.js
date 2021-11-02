const express = require("express");
const ejs = require("ejs");
const homeRoute = require('./routers/homeRoute')
const app = express();

app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());
// use static assets
app.use(express.static('public'))
// set the view engine to ejs
app.set("view engine", "ejs");
// app use route
app.use(homeRoute)


app.listen(3000, () => {
  console.log("you server is up!");
});

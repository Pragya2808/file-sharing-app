// File Sharing Application
const express = require("express");
const { engine } = require("express-handlebars");
const hbs = require("handlebars");
const app = express();
const port = 3000;
const path = require("path");
const router = require(path.join(__dirname, "routers"));
const bodyParser = require("body-parser");
// const passport = require("passport");

// .ENV configuration:
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize()); //Dòng này để thông báo sử dụng passport nhé

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const db = require(path.join(__dirname, "config", "db"));
db.connect();

// Handlebars express template engine (And setup)
app.engine(".hbs", engine({ extname: ".hbs" }));

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

// Use static files (html, css, js, etc)
app.use(express.static("public"));

/*
  ¯\_(❛0 ‿❛0)_/¯

  # This project has done !
*/

app.use("/", router);

app.listen(port, () => {
  console.log(`listening on port: http://localhost:${port}`);
});

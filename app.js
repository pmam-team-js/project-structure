const expressWinston = require("express-winston");
const winston = require("winston");
require("winston-daily-rotate-file");
require('dotenv').config({path:'./api/config/.env'})
const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const helmet = require("helmet");

const logger = require("./api/config/server-logger");

var app = express();

app.use(bodyparser.json());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//log all incoming
app.use(logger.applogger);

//Routes
var usersRoute = require("./api/modules/users");
app.use("/api", usersRoute);

var moviesRoute = require("./api/modules/movies");
app.use("/api", moviesRoute);

var productsRoute = require("./api/modules/products");
app.use("/api", productsRoute);

var countriesRoute = require("./api/modules/countries");
app.use("/api", countriesRoute);

//Handler errors
app.use(logger.errorlogger);

module.exports = app;

var path = require("path");
var express = require("express");
var auth = require("../../config/auth");
var router = express.Router();

var ctrlCountries = require("./countries.ctrl");

// file level logging
var dirname = path.basename(__dirname);
var filename = dirname + "." + path.basename(__filename);
var filelogger = require("../../config/server-logger").filelogger(
  dirname,
  filename
);

router.route("/countries").get(auth.authenticate, ctrlCountries.GetCountries);

module.exports = router;

var path = require("path");
var express = require("express");
var router = express.Router();

// file level logging
var dirname = path.basename(__dirname);
var filename = dirname + "." + path.basename(__filename);
var filelogger = require("../../config/server-logger").filelogger(
  dirname,
  filename
);

var ctrlMovies = require("./movies.ctrl");
router.route("/movies").get(ctrlMovies.GetMovies);

module.exports = router;

var path = require("path");
var express = require("express");
var router = express.Router();

var ctrlProduct = require("./products.ctrl");
var dirname = path.basename(__dirname);
var filename = dirname + "." + path.basename(__filename);
var filelogger = require("../../config/server-logger").filelogger(
  dirname,
  filename
);

router.route("/products").get(ctrlProduct.GetProducts);

module.exports = router;
var path = require("path");
var express = require("express");
var router = express.Router();
// var filelogger = require("../../config/server-logger").filelogger(
//   __dirname,
//   __dirname + "." + path.basename(__filename)
// );

// filelogger.info("I am here");

var ctrlUsers = require("./users.ctrl");
router.route("/login").post(ctrlUsers.GetUserLogin);

module.exports = router;

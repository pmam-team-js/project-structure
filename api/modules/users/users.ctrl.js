var path = require("path");
var modelUsers = require("./users.model");
var logger = require("../../config/server-logger");

//logger.filelogger(path.basename(__filename));

//logger.info("i am here");

module.exports.GetUserLogin = (req, res) => {
  var result = modelUsers.GetUserLoginDB(req);
  res.status(200).json(result);
};

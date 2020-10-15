var path = require("path");
var logger = require("../../config/server-logger");

//logger.filelogger(path.basename(__filename));

//logger.info("i am here");

module.exports.GetUserLoginDB = (req) => {
  return req.body;
};

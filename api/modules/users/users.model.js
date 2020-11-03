var path = require("path");
var logger = require("../../config/server-logger");
var auth = require("../../config/auth");

//logger.filelogger(path.basename(__filename));

//logger.info("i am here");

module.exports.GetUserLoginDB = (req) => {
  const _username = req.body.username;
  const _token = auth.generateToken({ username: _username });

  return { username: _username, token: _token };

  //return req.body;
};

var path = require("path");
var hotelData = require("../../database/movies-data");

// file level logging
var dirname = path.basename(__dirname);
var filename = dirname + "." + path.basename(__filename);
var filelogger = require("../../config/server-logger").filelogger(
  dirname,
  filename
);

module.exports.GetMoviesDB = async (req) => {
  return hotelData.rct;
};

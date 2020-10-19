var path = require("path");
var modelMovies = require("./movies.model");

// file level logging
var dirname = path.basename(__dirname);
var filename = dirname + "." + path.basename(__filename);
var filelogger = require("../../config/server-logger").filelogger(
  dirname,
  filename
);

async function GetMovies(req, res) {}

module.exports.GetMovies = async (req, res, next) => {
  await modelMovies.GetMoviesDB(req).then((result) => {
    if (result === undefined) {
      res.status(200).json({});
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = {
  GetMovies,
};

var path = require("path");
var modelMovies = require("./movies.model");

// file level logging
var dirname = path.basename(__dirname);
var filename = dirname + "." + path.basename(__filename);
var filelogger = require("../../config/server-logger").filelogger(
  dirname,
  filename
);

module.exports.GetMovies = async (req, res, next) => {
  await modelMovies.GetMoviesDB(req).then((result) => {
    if (result === undefined) {
      res.status(200).json({});
    } else {
      res.status(200).json(result);
    }
  });
};

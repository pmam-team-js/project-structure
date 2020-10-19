const { toJSON } = require("utils-deep-clone");
var path = require("path");
var modelCountries = require("./countries.model");

// file level logging
var dirname = path.basename(__dirname);
var filename = dirname + "." + path.basename(__filename);
var filelogger = require("../../config/server-logger").filelogger(
  dirname,
  filename
);

async function GetCountries(req, res, next) {
  try {
    let result = await modelCountries.GetCountriesDB(req, res);
    res.json(result);
  } catch (err) {
    console.log(req);
    //var log = { err, request: { req } };
    filelogger.error(err);
    next(err);
  }
}

module.exports = {
  GetCountries,
};

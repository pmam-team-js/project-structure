const { toJSON } = require("utils-deep-clone");
const logger = require("../../config/server-logger");

var path = require("path");
var modelCountries = require("./countries.model");

// file level logging
var dirname = path.basename(__dirname);
var filename = dirname + "." + path.basename(__filename);
var filelogger = logger.filelogger(dirname, filename);

async function GetCountries(req, res, next) {
  try {
    let result = await modelCountries.GetCountriesDB(req, res);
    res.json(result);
  } catch (err) {
    filelogger.error(logger.getErrorRequestObject(req, toJSON(err)));
    next(err);
  }
}

module.exports = {
  GetCountries,
};

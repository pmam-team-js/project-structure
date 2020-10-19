var path = require("path");
const mysqlconnection = require("../../database/mysqlconn");

// var dirname = path.basename(__dirname);
// var filename = dirname + "." + path.basename(__filename);
// var filelogger = require("../../config/server-logger").filelogger(
//   dirname,
//   filename
// );

function GetCountriesDB(req, res) {
  return new Promise((resolve, reject) => {
    reject(new Error("sql not connected"));
    // mysqlconnection.query("SELECT * FROM WORLD.COUNTRY", (err, result) => {
    //   if (err) {
    //     return reject(err);
    //   } else {
    //     return resolve(result);
    //   }
    // });
  });
}
module.exports = {
  GetCountriesDB,
};

var path = require("path");
const mysqlconnection = require("../../database/mysqlconn");


var dirname = path.basename(__dirname);
var filename = dirname + "." + path.basename(__filename);
var filelogger = require("../../config/server-logger").filelogger(
  dirname,
  filename
);
//logger.info("i am here");
function GetProductsDB(req,res) {
  return new Promise((resolve, reject) => {
    mysqlconnection.query("Select * from TBL_PRODUCT_M", (err, result) => {
      if (err) {
        return reject(err);
      }
      else {
        return resolve(result);
      }
    })
  })
}
module.exports =
{
    GetProductsDB
}

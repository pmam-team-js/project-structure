var path = require("path");
var modelProduct = require("./products.model");
var logger = require("../../config/server-logger");

var dirname = path.basename(__dirname);
var filename = dirname + "." + path.basename(__filename);
var filelogger = require("../../config/server-logger").filelogger(
  dirname,
  filename
);

async function GetProducts(req,res)
{
  let result =await modelProduct.GetProductsDB(req,res);
  res.json(result);
}

module.exports={
  GetProducts
}

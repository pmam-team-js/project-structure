var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Matrix@0101",
  database: "world",
  multipleStatements: true,
});

// const dataFromTheScaryInternet = 3

module.exports = {
  query: (queryText, params, callback) => {
    return pool.query(queryText, params, callback);
  },
};

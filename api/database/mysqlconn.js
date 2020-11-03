var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  port:process.env.MYSQLPORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

// const dataFromTheScaryInternet = 3

module.exports = {
  query: (queryText, params, callback) => {
    return pool.query(queryText, params, callback);
  },
};

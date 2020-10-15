var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "x",
  password: "x",
  database: "todo",
});

// const dataFromTheScaryInternet = 3

module.exports = {
  query: (queryText, params, callback) => {
    return pool.query(queryText, params, callback);
  },
};

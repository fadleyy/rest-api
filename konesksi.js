const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "restApi",
});

conn.connect((error) => {
  if (error) throw error;
  console.log("aman pak");
});

module.exports = conn;

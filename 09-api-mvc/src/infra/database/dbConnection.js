const mysql = require('mysql2/promise');

const {
  DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE,
} = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_DATABASE,
  password: DB_PASS,
  port: +DB_PORT,
  waitForConnections: true, // configure better
  connectionLimit: 10, // configure better
  queueLimit: 0, // configure better

});

module.exports = pool;

const mysql = require('mysql');

/**
 * Create a pool connection for mysql
 * It can be do with environment variable
 */
const con = mysql.createPool({
  host: 'us-cdbr-east-05.cleardb.net',
  port: 3306,
  user: 'b732077189fa28',
  password: '14d905c1',
  database: 'heroku_dc094d6283f186e',
});

module.exports = con;

const mysql = require('mysql');

const con = mysql.createPool({
         host     : 'us-cdbr-east-05.cleardb.net',
         port     :  3306,
         user     : 'bb4711e8fb07d5',
         password : 'c96cbe65',
         database : 'heroku_ecd2cdd291b0ba0',
});


module.exports = con
const mysql = require('mysql');

// MySQL database connection configuration
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "excel"
});

module.exports = connection
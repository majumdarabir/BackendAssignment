
// Connect to MySQL database
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "SELECT * FROM data where ticker='AAPL'"
    // var sql = "SELECT *FROM data WHERE STR_TO_DATE(date, '%m/%d/%Y') >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR) and ticker='AAPL';"
    var sql = "SELECT *FROM data WHERE STR_TO_DATE(date, '%m/%d/%Y') >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR) and ticker='ZS';"
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});




const connection = require('../config/db')

const getAllAAPL=async(req,res)=>{
    var sql = "SELECT * FROM data where ticker='AAPL'"
    // var sql = "SELECT *FROM data WHERE STR_TO_DATE(date, '%m/%d/%Y') >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR) and ticker='AAPL';"
    // var sql = "SELECT *FROM data WHERE STR_TO_DATE(date, '%m/%d/%Y') >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR) and ticker='ZS';"
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
    
}
const getAllAAPLWithRestriction = async (req, res) => {
    
    var sql = "SELECT *FROM data WHERE STR_TO_DATE(date, '%m/%d/%Y') >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR) and ticker='AAPL';"
    
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result);
    });

}
const getAllZSWithRestriction = async (req, res) => {

    var sql = "SELECT *FROM data WHERE STR_TO_DATE(date, '%m/%d/%Y') >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR) and ticker='ZS';"

    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result);
    });

}

module.exports = {getAllAAPL,getAllAAPLWithRestriction,getAllZSWithRestriction}


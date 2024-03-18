const express = require('express')
const connection = require('./config/db');
const  route  = require('./Routes/apiRoutes');
const app = express()


app.use('/Api',route)

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
app.listen(4000,(req,res)=>{
    console.log("server is started ..")
})
const express = require('express')
const {getAllAAPL,getAllAAPLWithRestriction, getAllZSWithRestriction} = require('../controllers/apiControllers')

const route = express.Router()

route.get('/ticker',getAllAAPL)
route.get('/ticker=AAPL&column=revenue,gp&period=5y',getAllAAPLWithRestriction)
route.get('/ticker=ZS&column=revenue,gp&period=5y', getAllZSWithRestriction)
module.exports = route
let db=require('./dbConnection');
const jwt = require('jsonwebtoken');
const User=require("./model/UserModal")
let router = require('./route/userRoute');
const cors=require('cors')
//console.log({router})
const express = require('express')
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.listen(3000)
console.log('3000')
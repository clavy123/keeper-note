const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const cors = require('cors')
require('dotenv').config()


app.use(cors())

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const user = require('../backend/routes/userRoutes')

app.use('/api/v1',user)



module.exports = app;

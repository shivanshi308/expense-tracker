const express = require('express')
const cors = require('cors')
require('dotenv').config()

const connectDB = require('./config')


const app=express()
const router = express.Router()

app.use(express.json())

const PORT= process.env.PORT || 5000

connectDB()

const routes = require( './routes')
app.use('/home',routes)

app.listen(PORT, console.log(`Server running on port ${PORT}`));
const express = require('express')

const app = express()

const initRoute = require('./routes/initRoute')

app.use(express.json())

app.use('/', initRoute)

module.exports = app
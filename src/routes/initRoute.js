const express = require('express')
const route = express.Router()
const package = require('../../package.json')

route.get('/', (req, res)=>{
    res.json({msg: `Bem vindo à API - v${package.version}!`})
})

module.exports = route
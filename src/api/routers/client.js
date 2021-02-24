const express = require('express')
const clientRouter = express.Router()
const { client } = require('../controllers')

clientRouter.post('/register', client.registerClient)

module.exports = clientRouter
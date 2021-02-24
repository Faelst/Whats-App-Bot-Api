const express = require('express')
const appServer = express()
const { appRouter, clientRouter } = require('./indexRouter')
const port = process.env.APLICATION_MODE == 'PROD' ? 8080 : 3003

var bodyParser = require('body-parser')
appServer.use(bodyParser.json());

// appServer.all('*', requireAuthentication)
appServer.use('/app',appRouter)
appServer.use('/client', clientRouter)

module.exports = {appServer , port}
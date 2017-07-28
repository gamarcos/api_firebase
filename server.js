require('dotenv').config()
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', require('./app/controllers/index'))

app.listen(process.env.PORT || 8000)
console.log('Iniciando a aplicação na porta 8000')

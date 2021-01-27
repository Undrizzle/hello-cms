const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const routes = require('./routes/index')

const app = express()
const http = require('http').Server(app)

app.use(express.static(path.join(__dirname, '../dist')))

app.set('views', path.join(__dirname, '../dist'))
app.engine('html', ejs.__express)
app.set('view engine', 'html')

app.use(bodyParser.json())

app.use('/', routes)

const port = process.env.Port || 3000

http.listen(port, () => {
  console.log('Server listening at port %d', port)
})
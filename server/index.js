const path = require('path')
const express = require('express')
const routes = require('./routes/index')

const app = express()
const http = require('http').Server(app)

app.use(express.static(path.join(__dirname, '../dist')))

app.use('/', routes)

const port = process.env.Port || 3000

http.listen(port, () => {
  console.log('Server listening at port %d', port)
})
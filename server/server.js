const express = require('express')
const path = require('path')
const server = express()

// require and use routes
const routes = require('./routes')

server.use('/', routes)

// accept URL encoded data on POST requests
server.use(express.urlencoded({ extended: false }))

// Set up static folder
const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

server.get('*', (req, res) => {
    res.sendFile(staticFolder + '/index.html')
})

module.exports = server 
const server = require('./server')

// Server listening on port 3000
const port = 3000

server.listen(port, () => {
    console.log(`I am listening on http://localhost:${port}`)
})
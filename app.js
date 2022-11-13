const http = require('http');
const express = require('express');
const morgan = require('morgan');


const hostname = "localhost";
const port = 8080

const app = express()

app.use(morgan('dev'))

app.use(express.static('public'))


app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>HELLO EXPRESS</h1>")
})

const server = http.createServer(app)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})
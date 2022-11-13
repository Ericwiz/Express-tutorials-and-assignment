const exp = require('constants');
const express = require('express');
const http = require('http');

const hostname = "localhost";
const port = 8080

const app = express()

app.use((req, res, next) => {
    console.log(req.headers)
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>HELLO EXPRESS</h1>")
})

const server = http.createServer(app)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})
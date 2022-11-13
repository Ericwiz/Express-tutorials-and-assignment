const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 8080

const app = express()

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static('public'));

// http ALL
app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})

// http GET
app.get('/dishes', (req, res, next) => {
    res.end('Will Send all dishes')
})

// http POST
app.post('/dishes', (req, res, next) => {
    res.end(`Will add the dish: ${req.body.name} with details: ${req.body.description}`)
})

// PUT
app.put('/dishes', (req, res, next) => {
    res.statusCode = 403
    res.end(`Operation not supported in /dishes`)
})

// http DEELETE
app.delete('/dishes', (req, res, next) => {
    res.end('Will delete all dishe!')
})

/* Each dish */
// http GET
app.get('/dishes/:dishId', (req, res, next) => {
    res.end(`Will Send detail of the dish: ${req.params.dishId} to you!`)
})

// http POST
app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403
    res.end(`POST Operation not supported in /dishes`)
})

// PUT
app.put('/dishes/:dishId', (req, res, next) => {
    res.write(`updating the dish: ${req.params.dishId}`)
    res.end(`will update the dish: ${req.body.dishId}\n with details: ${req.body.description}`);
})

// http DEELETE
app.delete('/dishes/:dishId', (req, res, next) => {
    res.end(`deleting dish: ${req.params.dishId}`)
})


// MIDDLEWARE
app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>HELLO EXPRESS</h1>")
})

const server = http.createServer(app)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const dishesRoute = require('./routes/dishRoute');
const promosRoute = require('./routes/promoRoute');
const leadersRoute = require('./routes/lerdersRoute');

const hostname = "localhost";
const port = 8080

const app = express()

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', dishesRoute);
app.use('/promos', promosRoute);
app.use('/leaders', leadersRoute);
app.use(express.static('public'));

// // MIDDLEWARE
// app.use((req, res, next) => {
//     res.setHeader("Content-Type", "text/html")
//     res.end("<h1>HELLO EXPRESS</h1>")
// })

const server = http.createServer(app)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});
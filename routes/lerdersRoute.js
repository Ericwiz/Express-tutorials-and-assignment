const express = require('express');

const router = express.Router();

router.route(('/'))
    .all((req, res, next) => {
        next()
    })
    .get((req, res, next) => {
        res.send('This will display all the leaders')
    })
    .post((req, res, next) => {
        res.send(`This will post a leader with name: ${req.body.name} and detail: ${req.body.description}`)
    })
    .put((req, res, next) => {
        res.status(403)
        res.send("cannot Perform PUT on /leaders")
    })
    .delete((req, res, next) => {
        res.send("This will delete all leaders")
    });

router.route('/:leaderId')
    .all((req, res, next) => {
        next()
    })
    .get((req, res, next) => {
        res.send(`GET leader with the id: ${req.params.leaderId}`)
    })
    .post((req, res, next) => {
        res.status(403)
        res.send("cannot POST to /leaders/:leaderId")
    })
    .put((req, res, next) => {
        res.send(`UPDATE leader with id: ${req.params.leaderId}`)
    })
    .delete((req, res, next) => {
        res.send(`DELETE leader with id: ${req.params.leaderId}`)
    });

module.exports = router
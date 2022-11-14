const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

router.route('/')
    .all((req, res, next) => {
        next();
})
    // http GET
    .get((req, res, next) => {
        res.send('Will send all')
    })

    // http POST
    .post((req, res, next) => {
        res.send(`Will add the dish: ${req.body.name} with details: ${req.body.description}`)
    })

    // PUT
    .put((req, res, next) => {
        res.statusCode = 403
        res.send(`Operation not supported in /dishes`)
    })

    // http DEELETE
    .delete((req, res, next) => {
        res.send('Will delete all dishe!')
    })

    router.get('/:dishId', (req, res, next) => {
        res.send(`Will Send detail of the dish: ${req.params.dishId} to you!`)
    })
    
    // http POST
    router.post('/:dishId', (req, res, next) => {
        res.statusCode = 403
        res.send(`POST Operation not supported in `)
    })
    
    // PUT
    router.put('/:dishId', (req, res, next) => {
        res.send(`will update the dish: ${req.body.name}\n with details: ${req.body.description}`);
    })
    
    // http DEELETE
    router.delete('/:dishId', (req, res, next) => {
        res.send(`deleting dish: ${req.params.dishId}`)
    })


module.exports = router;
const express = require('express')

const router = express.Router()

router.route('/')
    .all((req, res, next) => {
        next()
    })
    .get((req, res, next) => {
        res.send("Display all promos")
    })
    .post((req, res, next) => {
        res.send(`Post a new promo with name: ${req.body.name} and detail: ${req.body.description}`)
    })
    .put((req, res, next) => {
        res.status(403)
        res.send("Cannot perfom PUT on /promos")
    })
    .delete((req, res, next) => {
        res.send("This will delete all promos")
    });

router.get('/:promoId', (req, res, next) => {
    res.send(`GET the promo with the id: ${req.params.promoId}`)
})
router.post('/:promoId', (req, res, next) => {
    res.send("cannot Perform POST on /promos/:promoId")
})
router.put('/:promoId', (req, res, next) => {
    res.send(`will update promo with id: ${req.params.promoId}`)
})
router.delete('/:promoId', (req, res, next) => {
    res.send(`will delete promo with id: ${req.params.promoId}`)
})

module.exports = router

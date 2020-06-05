const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/add-team', (req, res) => {
    res.render('add-team')
})

router.get('/add-profile', (req, res) => {
    res.render('add-profile')
})

module.exports = router

const express = require('express')
const router = express.Router()

const Profile = require('../models/Profile')

router.get('/profiles', (req, res) => {
    let filters = req.query

    if (req.query.age != null) {
        filters = {
            age: {$gte: filters.age},
        }
    }

    Profile.find(filters)
    .then((profiles) => {
        res.json({
            confirmation: 'success',
            data: profiles,
        })
    })
    .catch((err) => {
        res.json({
            confirmation: 'failure',
            message: err.message,
        })
    })
})

router.get('/profiles/:id', (req, res) => {
    const id = req.params.id

    Profile.findById(id)
    .then((profile) => {
        res.json({
            confirmation: 'success',
            data: profile,
        })
    })
    .catch(() => {
        res.json({
            confirmation: 'failure',
            data: `Unable to locate profile with id: [${id}]`,
        })
    })
})

router.post('/profiles', (req, res) => {
    Profile.create(req.body).then(profile => {
        res.json({
            confirmation: 'success',
            profile: profile,
        })
    }).catch(err => {
        res.json({
            confirmation: 'failure',
            message: err.message,
        })
    })
})

module.exports = router

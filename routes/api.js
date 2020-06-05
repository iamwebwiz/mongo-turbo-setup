const express = require('express')
const router = express.Router()

const Profile = require('../models/Profile')

router.get('/profiles', (req, res) => {
  let filters = req.query

  if (req.query.age != null) {
    filters = {
      age: { $gte: filters.age },
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
        confirmation: 'fail',
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
        confirmation: 'fail',
        data: `Unable to locate profile with id: [${id}]`,
      })
    })
})

module.exports = router

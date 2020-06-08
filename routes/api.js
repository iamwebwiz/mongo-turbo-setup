const express = require('express')
const router = express.Router()

const Profile = require('../models/Profile')
const Team = require('../models/Team')

// Profiles-specific endpoints
router.get('/profiles', (req, res) => {
  let filters = req.query

  if (req.query.age != null) {
    filters = {
      age: {$gte: filters.age},
    }
  }

  Profile.find(filters)
    .then(profiles => {
      res.json({
        confirmation: 'success',
        data: profiles,
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'failure',
        message: err.message,
      })
    })
})

router.get('/profiles/:id', (req, res) => {
  const id = req.params.id

  Profile.findById(id)
    .then(profile => {
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
  Profile.create(req.body)
    .then(profile => {
      res.json({
        confirmation: 'success',
        profile: profile,
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'failure',
        message: err.message,
      })
    })
})

// Teams-specific endpoints
router.get('/teams', (req, res) => {
  let filters = req.query

  Team.find(filters)
    .then(teams => {
      res.json({
        confirmation: 'success',
        data: teams,
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'failure',
        message: err.message,
      })
    })
})

router.get('/teams/:id', (req, res) => {
  const id = req.params.id

  Team.findById(id)
    .then(team => {
      res.json({
        confirmation: 'success',
        data: team,
      })
    })
    .catch(() => {
      res.json({
        confirmation: 'failure',
        data: `Unable to locate team with id: [${id}]`,
      })
    })
})

router.post('/teams', (req, res) => {
  Team.create(req.body)
    .then(team => {
      res.json({
        confirmation: 'success',
        profile: team,
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'failure',
        message: err.message,
      })
    })
})

module.exports = router

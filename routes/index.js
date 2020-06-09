const express = require('express');
const router = express.Router();

const Profile = require('../models/Profile');
const Team = require('../models/Team');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/profiles', (req, res) => {
  let filters = req.query;

  if (req.query.age != null) {
    filters = {
      age: {$gte: filters.age},
    };
  }

  Profile.find(filters)
    .then(profiles => {
      res.json({
        confirmation: 'success',
        data: profiles,
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'failure',
        message: err.message,
      });
    });
});

router.get('/profiles/:id', (req, res) => {
  const id = req.params.id;

  Profile.findById(id)
    .then(profile => {
      res.json({
        confirmation: 'success',
        data: profile,
      });
    })
    .catch(() => {
      res.json({
        confirmation: 'failure',
        data: `Unable to locate profile with id: [${id}]`,
      });
    });
});

router.get('/teams', (req, res) => {
  let filters = req.query;

  Team.find(filters)
    .then(teams => {
      res.json({
        confirmation: 'success',
        data: teams,
      });
    })
    .catch(err => {
      res.json({
        confirmation: 'failure',
        message: err.message,
      });
    });
});

router.get('/teams/:id', (req, res) => {
  const id = req.params.id;

  Team.findById(id)
    .then(team => {
      res.json({
        confirmation: 'success',
        data: team,
      });
    })
    .catch(() => {
      res.json({
        confirmation: 'failure',
        data: `Unable to locate team with id: [${id}]`,
      });
    });
});

router.get('/add-team', (req, res) => {
  res.render('add-team', {title: 'Add Team'});
});

router.get('/add-profile', (req, res) => {
  res.render('add-profile', {title: 'Add Profile'});
});

module.exports = router;

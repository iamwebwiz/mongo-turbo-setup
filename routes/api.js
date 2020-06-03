// Full Documentation - https://docs.turbo360.co
const express = require('express');
const router = express.Router();

const Profile = require('../models/Profile');

router.get('/profiles', (req, res) => {
  Profile.find({ team: 'Regallabs' })
    .then((profiles) => {
      res.json({
        confirmation: 'success',
        data: profiles,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: 'fail',
        message: err.message,
      });
    });
});

module.exports = router;

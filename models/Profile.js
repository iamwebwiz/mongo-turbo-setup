const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  team: { type: String },
  position: { type: String },
});

module.exports = mongoose.model('Profile', Profile);

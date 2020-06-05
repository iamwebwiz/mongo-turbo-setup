const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    firstName: {type: String, trim: true, required: true},
    lastName: {type: String, trim: true, required: true},
    age: {type: Number, default: 0, required: true},
    team: {type: String, trim: true, required: true},
    position: {type: String, trim: true, required: true},
})

module.exports = mongoose.model('Profile', Profile)

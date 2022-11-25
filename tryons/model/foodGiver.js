const mongoose = require('mongoose');
var foodGiver = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    Longitude: {
        type: String,
        required: true
    },
    Latitude: {
        type: String,
        required: true
    }
});

//Export the model
foodGiver.index({ location: "2dsphere" });
module.exports = mongoose.model('foodGiver', foodGiver);
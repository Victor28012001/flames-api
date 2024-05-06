const mongoose = require('mongoose');

const ChurchInfoSchema = new mongoose.Schema({
    logo_url: {
        type: String,
        required: true
    },
    fb_url: {
        type: String,
        required: true
    },
    wp_url: {
        type: String,
        required: true
    },
    yt_url: {
        type: String,
        required: true
    },
    twt_url: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    churchEmail: {
        type: String,
        required: true
    },
    vision: {
        type: String,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    minister: {
        type: String,
        required: true
    },
    mandate: {
        type: String,
        required: true
    },
    pastor: {
        type: String,
        required: true
    },
    year_founded: {
        type: String,
        required: true
    }
});

module.exports = ChurchInfo = mongoose.model('churchInfo', ChurchInfoSchema);
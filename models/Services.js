const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    days: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = Services = mongoose.model('services', ServicesSchema);
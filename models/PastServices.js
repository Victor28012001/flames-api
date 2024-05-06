const mongoose = require('mongoose');

const PastServicesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    minister: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    keyQuote: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true,
    },
},
    { timestamps: true }
);

module.exports = PastServices = mongoose.model('pastservices', PastServicesSchema);
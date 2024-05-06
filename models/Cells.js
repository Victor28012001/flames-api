const mongoose = require('mongoose');

const CellsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    leaders: {
        type: [String],
        required: true
    },
    workers: {
        type: [String],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    meeting_days: {
        type: [String],
        required: true
    },
    announcements: {
        type: [String],
        required: true
    }
});

module.exports = Cells = mongoose.model('cells', CellsSchema);
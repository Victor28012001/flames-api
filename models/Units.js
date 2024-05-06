const mongoose = require('mongoose');

const UnitsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    leaders: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'UnitsMembers'
        }],
    workers: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'UnitsMembers'
        }]
    ,
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

module.exports = Units = mongoose.model('units', UnitsSchema);
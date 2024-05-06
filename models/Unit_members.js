const mongoose = require('mongoose');

const UnitsMembersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "worker",
        enum: ["worker", "leader", "pastor"],
        required: true
    },
    parts: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Units'
        }]
});

module.exports = UnitsMembers = mongoose.model('unitsmembers', UnitsMembersSchema);
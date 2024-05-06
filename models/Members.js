const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    cell: {
        type: String,
        required: true
    },
    church_department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Units",
        required: true,
        default:"none"
    },
    role: {
        type: String,
        default: "member",
        enum: ["member", "worker", "leader", "pastor"],
        required: true
    },
    date_joined: {
        type: Date,
        required: true
    }
});

module.exports = Member = mongoose.model('member', MemberSchema);
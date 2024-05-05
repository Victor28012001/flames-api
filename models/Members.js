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
    type: String
  },
  level: {
    type: Number
  },
  cell: {
    type: String
  },
  church_department: {
    type: String
  },
  role: {
    type: String
  },
  date_joined: {
    type: Date
  }
});

module.exports = Member = mongoose.model('member', MemberSchema);
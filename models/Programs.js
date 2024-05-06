const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  ministers: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  }
});

module.exports = Program = mongoose.model('program', ProgramSchema);
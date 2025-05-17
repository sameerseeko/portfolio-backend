const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

module.exports = mongoose.model('Experience', experienceSchema);
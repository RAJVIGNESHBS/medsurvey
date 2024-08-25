// models/Survey.js
const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  responses: {
    type: Map,
    of: String
  }
});

module.exports = mongoose.model('Survey', SurveySchema);

// routes/surveys.js
const express = require('express');
const router = express.Router();
const Survey = require('../models/Survey');

// POST route to save survey responses
router.post('/', async (req, res) => {
  try {
    const survey = new Survey({
      responses: req.body.responses
    });
    await survey.save();
    res.status(201).json(survey);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET route to retrieve survey responses (optional)
router.get('/', async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

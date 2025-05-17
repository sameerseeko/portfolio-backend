const mongoose = require('mongoose');
const Experience = require('../models/Experience');

exports.getAllExperience = async (req, res) => {
  try {
    const experience = await Experience.find();
    res.json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createExperience = async (req, res) => {
  try {
    const newExp = new Experience(req.body);
    const savedExp = await newExp.save();
    res.status(201).json(savedExp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getExperienceById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Experience ID' });
  }

  try {
    const experience = await Experience.findById(id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.status(200).json(experience);
  } catch (err) {
    console.error('Error fetching experience:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateExperience = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Experience ID' });
  }

  try {
    const updatedExperience = await Experience.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedExperience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.status(200).json(updatedExperience);
  } catch (err) {
    console.error('Error updating experience:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};


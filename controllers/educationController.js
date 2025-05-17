const mongoose = require('mongoose');
const Education = require('../models/Education');

// GET all education entries
const getAllEducation = async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create a new education entry
const createEducation = async (req, res) => {
  try {
    const newEdu = new Education(req.body);
    const savedEdu = await newEdu.save();
    res.status(201).json(savedEdu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const getEducationById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Education ID' });
  }

  try {
    const education = await Education.findById(id);
    if (!education) {
      return res.status(404).json({ message: 'Education entry not found' });
    }
    res.status(200).json(education);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
const updateEducation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Education ID' });
  }

  try {
    const updatedEdu = await Education.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedEdu) {
      return res.status(404).json({ message: 'Education entry not found' });
    }

    res.status(200).json(updatedEdu);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
// DELETE education entry by ID
const deleteEducation = async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: 'Education entry deleted' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  getAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
};

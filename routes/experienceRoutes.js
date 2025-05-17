const express = require('express');
const router = express.Router();
const {
  getAllExperience,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
} = require('../controllers/experienceController');

// Routes
router.get('/', getAllExperience);
router.get('/:id', getExperienceById);        // ✅ Get experience by ID
router.post('/', createExperience);
router.put('/:id', updateExperience);         // ✅ Update experience by ID
router.delete('/:id', deleteExperience);

module.exports = router;

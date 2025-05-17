const express = require('express');
const router = express.Router();
const {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} = require('../controllers/skillController');

router.get('/', getAllSkills);
router.get('/:id', getSkillById);         // ✅ Get skill by ID
router.post('/', createSkill);
router.put('/:id', updateSkill);          // ✅ Update skill by ID
router.delete('/:id', deleteSkill);

module.exports = router;

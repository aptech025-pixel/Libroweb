// Lesson API endpoints
const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

router.get('/', lessonController.getAllLessons);
router.get('/:id', lessonController.getLessonById);
router.get('/recommend/:userId', lessonController.recommendNextLesson);

module.exports = router;

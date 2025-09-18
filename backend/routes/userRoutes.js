// User API endpoints
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', authMiddleware, userController.getProfile);
router.put('/profile', authMiddleware, userController.updateProfile);
router.post('/generate-api-key', authMiddleware, userController.generateApiKey);
router.post('/progress', authMiddleware, userController.saveProgress);

module.exports = router;

// Social API endpoints
const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/share', authMiddleware, socialController.shareProgress);

module.exports = router;

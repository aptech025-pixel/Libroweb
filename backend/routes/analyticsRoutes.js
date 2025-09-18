// Analytics API endpoints
const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/user', authMiddleware, analyticsController.getUserAnalytics);

module.exports = router;

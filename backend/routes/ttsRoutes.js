// TTS API endpoint
const express = require('express');
const router = express.Router();
const { processTTS } = require('../services/googleTtsService');

router.post('/', processTTS);

module.exports = router;

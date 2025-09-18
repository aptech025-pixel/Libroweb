// STT API endpoint
const express = require('express');
const router = express.Router();
const { processSTT } = require('../services/googleSttService');

router.post('/', processSTT);

module.exports = router;

const express = require('express');
const router = express.Router();
const deleteController = require('../app/controllers/deleteController');

router.post('/', deleteController.delete);
router.get('/', deleteController.show);

module.exports = router;

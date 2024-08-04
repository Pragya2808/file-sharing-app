const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/authController');

// [POST] /auth/logout
router.post('/logout', authController.logout);

// [POST] /auth/signup
router.post('/singup', authController.signup);

// [POST] /auth/login
router.post('/login', authController.login);

// [GET] /auth
router.get('/', authController.show);

module.exports = router;
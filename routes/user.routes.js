const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/api/usuarios', userController.register);
router.post('/api/login', userController.login);

module.exports = router;

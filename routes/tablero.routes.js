const express = require('express');
const router = express.Router();
const tableroController = require('../controllers/tablero.controller');
const auth = require('../middleware/auth');

// Rutas de tableros
router.get('/tableros', auth.verifyToken, tableroController.getTableros);
router.post('/tableros', auth.verifyToken, tableroController.createTablero);
router.put('/tableros/:id', auth.verifyToken, tableroController.updateTablero);
router.delete('/tableros/:id', auth.verifyToken, tableroController.deleteTablero);

module.exports = router;

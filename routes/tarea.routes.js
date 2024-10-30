const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');
const auth = require('../middleware/auth');

// Rutas de tareas
router.post('/tareas', auth.verifyToken, tareaController.createTarea);
router.put('/tareas/:id', auth.verifyToken, tareaController.updateEstadoTarea);

module.exports = router;

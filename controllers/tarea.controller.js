const db = require('../models');
const Tarea = db.Tarea;

// Crear una nueva tarea
exports.createTarea = async (req, res) => {
  try {
    const { titulo, descripcion, tablero_id } = req.body;
    const tarea = await Tarea.create({
      titulo,
      descripcion,
      estado: 'pendiente',
      tablero_id
    });
    res.status(201).json(tarea);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cambiar estado de una tarea
exports.updateEstadoTarea = async (req, res) => {
  try {
    const { estado } = req.body;
    const tarea = await Tarea.update(
      { estado },
      { where: { id: req.params.id } }
    );
    res.json({ message: 'Estado de tarea actualizado', tarea });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

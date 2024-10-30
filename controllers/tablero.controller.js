const db = require('../models');
const Tablero = db.Tablero;

// Obtener todos los tableros
exports.getTableros = async (req, res) => {
  try {
    const tableros = await Tablero.findAll();
    res.json(tableros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo tablero
exports.createTablero = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const tablero = await Tablero.create({ nombre, descripcion, usuario_id: req.userId });
    res.status(201).json(tablero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un tablero
exports.updateTablero = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const tablero = await Tablero.update(
      { nombre, descripcion },
      { where: { id: req.params.id } }
    );
    res.json({ message: 'Tablero actualizado correctamente', tablero });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un tablero
exports.deleteTablero = async (req, res) => {
  try {
    await Tablero.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Tablero eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

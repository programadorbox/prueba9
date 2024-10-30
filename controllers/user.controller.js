const { User } = require('../models'); // Importación corregida
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({ nombre, correo, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, password } = req.body;
    const user = await User.findOne({ where: { correo } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, 'SECRET_KEY', { expiresIn: '24h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

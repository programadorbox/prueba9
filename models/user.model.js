module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      nombre: { type: DataTypes.STRING, allowNull: false },
      correo: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, defaultValue: 'user' }  // Roles: 'user', 'admin'
    });
    return User;
  };
  
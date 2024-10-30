module.exports = (sequelize, DataTypes) => {
    const Tablero = sequelize.define('Tablero', {
      nombre: { type: DataTypes.STRING, allowNull: false },
      descripcion: { type: DataTypes.TEXT },
    });
    
    Tablero.associate = models => {
      Tablero.belongsTo(models.User, { foreignKey: 'usuario_id', as: 'usuario' });
      Tablero.hasMany(models.Tarea, { foreignKey: 'tablero_id', as: 'tareas' });
    };
  
    return Tablero;
  };
  
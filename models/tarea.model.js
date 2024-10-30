module.exports = (sequelize, DataTypes) => {
    const Tarea = sequelize.define('Tarea', {
      titulo: { type: DataTypes.STRING, allowNull: false },
      descripcion: { type: DataTypes.TEXT },
      estado: { type: DataTypes.STRING, defaultValue: 'pendiente' }, // 'pendiente', 'en progreso', 'completada'
      fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      fecha_limite: { type: DataTypes.DATE }
    });
  
    Tarea.associate = models => {
      Tarea.belongsTo(models.Tablero, { foreignKey: 'tablero_id', as: 'tablero' });
    };
  
    return Tarea;
  };
  
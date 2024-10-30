'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tarea.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    estado: DataTypes.STRING,
    fecha_creacion: DataTypes.DATE,
    fecha_limite: DataTypes.DATE,
    tablero_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tarea',
  });
  return Tarea;
};
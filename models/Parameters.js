const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Parameters extends Model {}

Parameters.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    parameter: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'parameters',
  }
);

module.exports = Parameters;

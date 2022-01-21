const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Parameters extends Model {}

Parameters.init(
  {
    ph: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mag: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    calc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amm: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'parameters',
  }
);

module.exports = Parameters;

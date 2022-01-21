const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Parameters extends Model {}

Parameters.init(
  {
    ph: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    calc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nit: {
      type: DataTypes.STRING,
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

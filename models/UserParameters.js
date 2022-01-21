const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserParameters extends Model {}

UserParameters.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ph: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alk: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    amm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phos: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nit: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'userParameters',
  }
);

module.exports = UserParameters;

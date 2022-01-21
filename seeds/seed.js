const sequelize = require('../config/connection');
const { User , Parameters } = require('../models');

const userData = require('./userData.json');
const parameterSeedData = require('./parameterSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Parameters.bulkCreate(parameterSeedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

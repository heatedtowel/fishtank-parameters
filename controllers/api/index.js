const router = require('express').Router();

const userRoutes = require('./userRoutes');
const parameterRoute = require('./parameters');

router.use('/users', userRoutes);
router.use('/params', parameterRoute);

module.exports = router;
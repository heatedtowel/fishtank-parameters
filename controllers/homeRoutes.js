const { Parameters } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();

const sanatize = (value) => {
  return JSON.parse(JSON.stringify(value));
};


router.get('/', async (req, res) => {
  const parameterData = await Parameters.findAll({});
  const parameters = parameterData.map((params) => params.get({ plain: true }));

  res.render('homepage', { parameters, loggedIn: req.session.logged_in });
});

router.get('/myParameters', async (req, res) => {
  const parameterData = await Parameters.findAll({});
  const parameters = parameterData.map((params) => params.get({ plain: true }));

  res.render('userParams', { parameters, loggedIn: req.session.logged_in });
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

module.exports = router;
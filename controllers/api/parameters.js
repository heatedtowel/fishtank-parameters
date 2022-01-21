const router = require('express').Router();

router.get('/' , async (req, res) => {
  return res.status(200).json('connected');
});

router.post('/submit', async (req, res) => {
  const { ph, alk, mag, calc, amm, phos, nit } = req.body;

  try {
    return res.json('sucess')
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

module.exports = router;
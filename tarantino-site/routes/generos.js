const express = require('express');
const router = express.Router();
const generos = require('../data/generos');

router.get('/', (req, res) => {
  res.render('generos', { generos: generos });
});

module.exports = router;

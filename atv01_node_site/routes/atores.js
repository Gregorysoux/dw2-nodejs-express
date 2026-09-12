const express = require('express');
const router = express.Router();
const atores = require('../data/atores');

router.get('/', (req, res) => {
  res.render('atores', { atores: atores });
});

module.exports = router;

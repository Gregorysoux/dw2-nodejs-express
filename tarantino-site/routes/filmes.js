const express = require('express');
const router = express.Router();
const filmes = require('../data/filmes');

router.get('/', (req, res) => {
  res.render('filmes', { filmes: filmes });
});

module.exports = router;

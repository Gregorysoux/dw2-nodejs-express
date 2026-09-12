const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const indexRoutes = require('./routes/index');
const filmesRoutes = require('./routes/filmes');
const atoresRoutes = require('./routes/atores');
const generosRoutes = require('./routes/generos');

app.use('/', indexRoutes);
app.use('/filmes', filmesRoutes);
app.use('/atores', atoresRoutes);
app.use('/generos', generosRoutes);

const porta = 3000;
app.listen(porta, () => {
  console.log('rodando na porta ' + porta);
});

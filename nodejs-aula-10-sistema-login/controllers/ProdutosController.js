import express from 'express'
const router = express.Router()
import Produto from '../models/Produto.js';
// Importando o Middleware de Autenicação
import Auth from "../middleware/Auth.js" 

// ROTA PRODUTOS
router.get("/produtos", Auth, (req, res) => {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  }).catch(error => {
    console.log(`Ocorreu um erro ao listar os produtos. Erro: ${error}`)
  });
});

export default router
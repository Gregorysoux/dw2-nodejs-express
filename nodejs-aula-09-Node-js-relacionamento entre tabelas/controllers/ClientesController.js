import express from "express";
//Importando o model
import Cliente from "../models/Cliente.js";

const rota = express.Router();


// ROTA CLIENTES
rota.get("/clientes", function (req, res) {
  //Selecionando todos os clientes do banco de dados
    Cliente.findAll().then(clientes => {
    res.render("clientes", {
    //Enviando a lista de clientes para a página HTML
    clientes: clientes,
  });    
}).catch(error => {
    console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`)
});
});

//ROTA PARA EXCLUIR UM CLIENTE
// :id -> Cria um parâmetro na rota
rota.get("/clientes/excluir/:id", (req,res) => {
  // Criando uma váriavel para armazenar o parâmetro que chega pela URL
  const id = req.params.id;
  //Chamando o Model e pedindo para excluir o cliente
  Cliente.destroy({
    where : {
      id : id,
    },
  }).then(() => {
    res.redirect("/clientes");
  }). catch(error => {
    console.log(`Ocorreu um erro ao excluir o cliente. Erro: ${error}.`)
  });
});

// ROTA DE EDIÇÃO DE CLIENTE
rota.get("/clientes/editar/:id", (req,res) => {
  //Coletando o parâmetro da URL
  const id= req.params.id;
  //Buscando o cliente no banco pela ID
  Cliente.findbyPk(id).then(cliente => {
    res.render("clienteEditar", {
      //Enviando um objeto com os dados do cliente para a página
      cliente : cliente,
    });
  }).catch(error => {
    console.log(`Ocorreu um erro ao buscar o cliente. Erro ${error}`);
  })
});

//ROTA QUE ALTERA UM CLIETNE NO BANCO DE DADOS
rota.post("/cliente/alterar", (req,res) => {
  // Coletando os dados do formúlario
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  //Chamando o model e pedindo para alterar no banco de dados
   Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    {where : {id : id}}
  ).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(`Ocorreu um erro ao alterar o cliente. Erro: ${error}`);
  });
});


//ROTA DE CADASTRO DE CLIENTES
rota.post("/clientes/cadastrar", (req,res) => {
  //Capturando os dados vindo do formulário e gravando nas variáveis
  //Coletando os dados do formulário
  const id = req.body.id
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco



  // Equivalente ao INSERT INTO
  Cliente.create({
    // NOME DA COLUNA / VARIÁVEL
    nome: nome,
    cpf: cpf,
    endereco: endereco
  });then(() => {
    res.redirect("/clientes")
  }).catch(error => {
    console.log(`Ocorreu um erro ao cadastrar o cliente.
      Erro: ${error}`)
  });
});

export default rota;
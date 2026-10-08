// Importando o Express com ES6 Modules
import express from "express";
// Importando o arquivo de conexão do Sequelize
import connection from "./config/sequelize-config.js";
// Iniciando o Express na variável app
const app = express();
// Importando os Controllers (onde estão as rotas)
import PedidosController from "./controllers/PedidosController.js";
import ClientesController from "./controllers/ClientesController.js"

//Importando os Models
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";
//Importnaod as Associações
import defineAssociations from "./config/association.js";

// Configurações do Express
//Configurando o express para permitir  dadis atráves de formularios
app.use(express.urlencoded({ extended :false}));
// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));
// Definindo o uso das rotas dos Controllers
app.use("/", PedidosController);
app.use("/", ClientesController)

// REALIZANDO A CONEXÃO COM O BANCO DE DADOS
connection.authenticate().then(() => {
    // Sucesso na promessa:
  console.log("Conexão com o banco de dados realizada com sucesso!");
   // Falha na promessa:
}).catch((error) => {
    console.log(`Ocorreu um erro ao se conectar ao banco de dados. Erro: ${error}`)
});

//CRIANDO O BANCO DE DADOS SE ELE NÃO EXISTIR
const DB_NAME = "loja_relacional";
connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`).then(() => {
  console.log(`O banco de dados ${DB_NAME} está criado!`)
}).catch((error) => {
  console.log(`Ocorreu um erro ao criar o banco de dados. Erro : ${error}`);
});

//Aplicando as associações
defineAssociations();

//SINCRONIZANDO OS MODELS
Promise.all([
  Cliente.sync({force: false}),
Pedido.sync({force: false})
]).then(() => {
  console.log("Tabelas e relacionamentos sincronizados com sucesso!");
}).catch(error => {
  console.log("Erro ao sincronizar as tabelas. Erro " + error);
});



// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// ROTA CLIENTES
app.get("/clientes", function (req, res) {
  const clientes = [
    {
      nome: "Ana Silva",
      cpf: "123.456.789-00",
      endereco:
        "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678",
    },
    {
      nome: "Pedro Almeida",
      cpf: "987.654.321-00",
      endereco:
        "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432",
    },
    {
      nome: "Marina Oliveira",
      cpf: "456.789.123-00",
      endereco:
        "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987",
    },
    {
      nome: "Rafael Santos",
      cpf: "321.654.987-00",
      endereco:
        "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321",
    },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

// ROTA PRODUTOS
app.get("/produtos", function (req, res) {
  const produtos = [
    { nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis" },
    { nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos" },
    { nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores" },
    { nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos" },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});

// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});

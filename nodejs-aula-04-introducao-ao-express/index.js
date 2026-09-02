//index.js: arquivo principal do back-end

//Importando o Express.js para o projeto
const express = require("express"); // Forma Clássica (CommonJS Modules)

const app = express(); //Criando uma instância do Express

//Configurando o EJS
app.set("view engine", "ejs"); //EJS renderiza as páginas do site

//AQUI ESTÃO AS ROTAS DO SITE:
//ROTA PRINCIPAL
// .get() -> Cria uma rota na aplicação
app.get("/", (req, res) => {
  res.render("index");
});

//ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  res.render("produtos");
});

//Metódo do Express para iniciar o servidor back end
//app.listen()

//Iniciando o servidor na porta 8080
const port = 8081;
app.listen(port, (error) => {
  // Tratando erros de inicialiação
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    //Em caso de sucesso
  } else {
    console.log(`Servidor iniciando com sucesso em: http://localhost:${port}`);
  }
});

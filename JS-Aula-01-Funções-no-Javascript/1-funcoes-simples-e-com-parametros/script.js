// FUNÇÃO SIMPLES

function showMessage() {
  const message = "<h2>Olá bem vindo!</h2>";
  document.write(message);
}
// Invocando a função
showMessage();

//Função com parâmetro / Argumento
const user = "Grégory Mlaker";

//Essa função recebe um parâmetro
function userMessage(user) {
  document.write(`<h3>O que deseja fazer hoje, ${user}?</h3>`);
}

//Invocando a função passando um argumento
userMessage(user);

//Função com mais d eum parâmetro
const n1 = 10;
const n2 = 5;

function soma(n1, n2) {
  let resultado = n1 + n2;
  document.write(`A soma de ${n1} + ${n2} é igual a ${resultado}.`);
}

soma(n1, n2);

function showMessage() {
  const message = "<h1>Seja bem vindo!</h2>";
  document.write(message);
}
showMessage();
document.write("<h1>Função Simples</h1><h2>Exercicio 1</h2>")



const nome = "Grégory";
const idade = "18"
const city = "Apiaí"


function userMessage(nome) {
  document.write(`<h3>O seu nome é ${nome} <br>Você tem de ${idade} anos idade <br>Você é da cidade de ${city}</h3>`);
}

userMessage(nome);

//exercicio 2


document.writeln("<h1>Função Com Parâmetros</h1><h2>Exercicio 2</h2>")

const n1 = 10;
const n2 = 2;

function divisao(n1, n2) {
  let resultado = n1 / n2;
  document.writeln(`A divisão de ${n1} / ${n2} é igual a ${resultado}.`);
}
divisao(n1, n2);

// exercicio 3

document.writeln("<h1>Função com retorno</h1><h2>Exercicio 3</h2>")

const n4 = 12;
const n5 = 5;
const n6 = 10;

function multiplicar(n4, n5, n6) {
  return n4 * n5 * n6;
}

document.write(
  `<p> A multiplicação de ${n4} por ${n5} e ${n6} é igual a <strong>${multiplicar(n4, n5, n6)}</strong></p>`,
);

//exercicio 4 

document.writeln("<h1>Função com mais de um retorno</h1><h2>Exercicio 4</h2>")

const numero = 18;

function Maioridade(numero){
    if (numero >= 18) {
        return 'Maior de Idade';
    }
    else{
        return 'Menor de Idade';
    }
}

document.write(`<p>Sua idade é de ${numero} anos sendo <strong>${Maioridade(numero)}</strong>!`)

//exercicio 5

document.writeln("<h1>Função Anônima</h1><h2>Exercicio 5</h2>")



const dataAtual = new Date();

document.write(dataAtual);
document.write("<br>");

const dia = String(dataAtual.getDate()).padStart(2, "0");
const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
const ano = dataAtual.getFullYear();

document.write(dia + "/" + mes + "/" + ano);
document.write("<br><br>");

const compraInternacional = 500.75;

const valorDolar = compraInternacional.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});

document.write("Valor da compra: " + valorDolar);
document.write("<br>");

const cotacaoDolar = 5.40;
const valorReal = compraInternacional * cotacaoDolar;

document.write("Valor em real: " + valorReal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
}));

document.write("<br><br>");

const dataEntrega = new Date(dataAtual);
dataEntrega.setDate(dataEntrega.getDate() + 12);

const diaEntrega = String(dataEntrega.getDate()).padStart(2, "0");
const mesEntrega = String(dataEntrega.getMonth() + 1).padStart(2, "0");
const anoEntrega = dataEntrega.getFullYear();

document.write("Data de entrega: " + diaEntrega + "/" + mesEntrega + "/" + anoEntrega);
document.write("<br><br>");

const nomeCliente = "jOaO dA sIlVa";

const nomeFormatado = nomeCliente
    .toLowerCase()
    .split(" ")
    .map(function(nome) {
        return nome.charAt(0).toUpperCase() + nome.slice(1);
    })
    .join(" ");

document.write("Olá, " + nomeFormatado + "! Sua compra foi realizada com sucesso.");
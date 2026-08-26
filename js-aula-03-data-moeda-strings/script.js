document.write("<h3>Manipulando datas: </h3>")

//Para começarmos a manipular datas no Javascript, 
// precisamos primeiro criar uma instãncia da classe Date, que é nativa do Javascript

const dataAtual = new Date();

document.write(dataAtual);

// Pegando o dia atual
const dia = dataAtual.getDate();

document.write(`<p>Hoje é dia ${dia}.</p>`)

// Pegando o mes atual
const mes = dataAtual.getMonth() + 1;
document.write(`<p>Hoje estamos no mês ${mes}.</p>`)

// Pegando o ano atual
const ano = dataAtual.getFullYear();

document.write(`<p>Atualmente estamos no de ${ano}.</p>`)

//EXIBINDO DATA COMPLETA
document.write(`Data de hoje: ${dia}/${mes}/${ano}.`)

// ADICIONANDO DIAS, MÊSES E ANOS À DATA ATUAL
// Adicionando 4 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 4);

//Exibindo a nova data
document.write(`<p>Daqui a 4 dias será dia ${dataAtual.getDate()}</p>`)

//ADICIONANDO 3 MESES A DATA ATUAL:
dataAtual.setMonth(dataAtual.getMonth() + 3);
//Exibindo nova data
document.write(`<p>Daqui a 3 meses será mês ${dataAtual.getMonth() + 1}</p>`)
//Adicionando 2 anos à data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2);
//Exibindo a nova data:
document.write(`<p>Daqui a 2 anos será ${dataAtual.getFullYear()}</p>`)

//#############################################################################

//FORMATAÇÃO DE MOEDAS
document.write("<h3>Manipulando moedas</h3>");
const futuroSalario = 40000.3;
document.write(`<p>${futuroSalario}</p>`);
// Mostrando casas decimais
document.write(`<p>${futuroSalario.toFixed(2)}</p>`);
//Ocultando casas decimais
document.write(`<p>${futuroSalario.toFixed(0)}</p>`);
//Tricando o identificador de casas decimais
document.write(`<p>${futuroSalario.toFixed(2).replace(".",",")}</p>`);

//FORMATANDO PARA REAL (R$)
document.write(`<p>
    ${futuroSalario.toLocaleString("pt-br",{
        style: "currency",
        currency: "BRL"
    })}
</p>`)

//FORMATANDO PARA DÓLAR (USD)
document.write(`<p>
    ${futuroSalario.toLocaleString("pt-br",{
        style: "currency",
        currency: "USD"
    })}
</p>`)
//############################################################################
// FORMATAÇÕES DE STRINGS
document.write("<h3>Formatação de Strings:</h3>")
const nome = "Diego Max";

//ALTERNANDO STRINGS PARA LETRAS MAIÚSCULAS
document.write(`<p>${nome.toUpperCase()}</p>`)
//ALTERNANDO STRINGS PARA LETRAS MINÚSCULAS
document.write(`<p>${nome.toLowerCase()}</p>`)

//COLOCANDO AS INICIAS EM LETRAS MAIÚSCULAS
const cidade = "sete barras";
const cidadeFormatada = cidade.split(" ").map( palavra => palavra. charAt(0).toUpperCase() + palavra.slice(1)).join(" ");
//EXIBINDO 
document.write(`<p>${cidadeFormatada}</p>`);

//CONTANDO O NÚMERO DE CARACTERES 
document.write(`<p>Seu nome tem ${nome.replace(/\s/g, "").length}letras.</p>`)
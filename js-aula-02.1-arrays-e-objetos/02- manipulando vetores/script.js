// METODOS DE MANIPULAÇÃO DE VETORES

let frutas = ['Laranja', 'Maçã', 'Banana']

document.write(`<p>Os itens do nosso vetor são: ${frutas}</p>`)

frutas[3] = 'Morango';

document.write(`<p> Agora a lista é: ${frutas}`);

//MÉTODO PUSH : Insere um novo elemento no FINAL do vetor 
frutas.push('Abacaxi')

document.write(`<p>Agora a lista é : ${frutas}</p>`)

//MÉTODO UNSHIFT : Insere um novo elemento no INÍCIO do vetor
// frutas[0] = 'Pera'


frutas.unshift('Pera')
document.write(`<p>Agora a lista é : ${frutas}</p>`)

//METODO LENGHT : Retorna o numero de elementos no vetor
document.write(`Na nossa lista teos ${frutas.length} frutas.`)

// METODO SORT : Ordena os itens do vetor
document.write(`<p>O primeiro item da lista é ${frutas[0]}</p>`)

let frutasOrdenadas = frutas.sort()

document.write(`<p>O primeiro item da lista é ${frutasOrdenadas[0]}</p>`);

document.write(`<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p>`);

//METODO SORT : Ordenando em ordem CRESCENTE e DECRECENTE
let numeros = [6,8,2,9,3,800,200];

document.write(`<p>Os numeros são: ${numeros}</p>`);

document.write(`<p>Os numeros ordenados são: ${numeros.sort()}</p>`);


document.write(`<p>Os numeros ordenadas de forma crecente são: ${numeros.sort((a,b) => a-b)}</p>`);

//  ORDENANDO CORRETAMENTE OS NUMEROS
// ORDEM CRESCENTE
document.write(`<p>Os números ordenados de forma decrescente são:${numeros.sort((a, b)=> b - a)}</p>`);
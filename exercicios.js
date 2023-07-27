// For loop
// Exercício 45 - Item por item 🔁
// Utilize uma estrutura de repetição para exibir cada item de um array.

// Observe a estrutura abaixo:

// const numeros = [1, 2, 3, 4, 5];
// A constante numeros é um array de números. Sendo assim:

// Crie um algoritmo que utiliza estrutura de repetição;
// - Exiba no console cada item de dentro do array.


const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}

// For loop
// Exercício 46 - Calcule os preços 🏷
// Você foi a uma lanchonete e gostaria de comprar um sanduíche, uma batata frita e um refrigerante,
// mas não sabia se seu dinheiro seria suficiente. 
//Para descobrir se você tem saldo para pagar pelo pedido, some os valores dos produtos:

// Sanduíche - R$ 10;
// Batata frita - R$ 12;
// Refrigerante - R$ 8.
// Os valores dos produtos foram salvos dentro de um array na variável valoresProdutos:

// const valoresProdutos = [10, 12, 8]; // array com o preço dos produtos
// let somaTotal = 0; // valor total
// Utilize a estrutura de repetição for para somar os valores;
// Armazene a soma dos valores na variável somaTotal e exiba o resultado no console.

const valoresProdutos = [10, 12, 8]; 
let somaTotal = 0; 
for (let index = 0; index < valoresProdutos.length; index++) {
    somaTotal += valoresProdutos[index];
}
console.log("soma ", somaTotal) 


// For loop
// Exercício 47 - Adicionando itens no array com push ➕

// Mario decidiu fazer uma salada de frutas e precisa comprar banana, maçã, mamão e goiaba. 
//Ele criou uma lista com JavaScript para guardar esses valores:

// const listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];
// Mario esqueceu de adicionar 'manga' em sua lista e precisa da sua ajuda para resolver esse problema:

// Utilize o método push para adicionar o valor 'manga' ao final do array listaDeFrutas;
// Use a estrutura de repetição for na constante listaDeFrutas atualizada para exibir todas as frutas da lista.

const listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];
listaDeFrutas.push('manga');

for (let index = 0; index < listaDeFrutas.length; index = index + 1) {
    console.log(listaDeFrutas[index]);
  }

//   For loop
// Exercício 48 - Multiplique números: faça a tabuada do 3 e do 7 🧑‍🏫
// João precisa ajudar sua filha Maria a estudar a tabuada do 3 e do 7, 
//e teve a ideia de usar a tecnologia ao seu favor, contudo precisa da sua ajuda:
// Desenvolva um algoritmo que multiplique os números de 1 a 9 pelos números 3 e 7. 
//Você terá como multiplicando os números 3 e 7 e como multiplicadores os números de 1 a 9.
// Exiba todas as operações com seus respectivos resultados no console do seu navegador.
// De olho na dica 👀 : Para exibir as operações no console do seu navegador, 
//você pode utilizar duas estruturas de repetição for aninhadas, que vão percorrer item a item.
//Para começar, você pode usar a constante multiplicador dada a seguir:
// const multiplicador = [3, 7];
// O console deve ter um retorno como esse:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63

const multiplicador = [3, 7];


for (let index = 0; index < multiplicador.length; index++) {
    for (let index2 = 1; index2 <= 9; index2 = index2 +1) {
        resultado = multiplicador[index] * index2;
        console.log(multiplicador[index] + ' x ' + index2 + ' = ' + resultado)
    }
}

const coresMarcelo = ['azul', 'vermelho', 'preto', 'rosa', 'dourado', 'verde', 'cinza'];
const coresJulia = ['branco', 'marrom', 'rosa', 'dourado', 'verde', 'cinza'];

let contador = 0;

for (let indexJ = 0; indexJ < coresJulia.length; indexJ = indexJ + 1) {
  for (let indexM = 0; indexM < coresMarcelo.length; indexM = indexM + 1) {
    if (coresJulia[indexJ] === coresMarcelo[indexM]) {
      contador = contador + 1;
    }
  }
}
console.log(contador);









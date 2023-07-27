// Funções
// Exercício 50 - Crie uma função
// Crie uma função mostrarFrase que retorne a frase ‘Vamo que vamo!’ quando chamada.

function mostrarFrase() {
    const frase = "Vamo que vamo!"
    return frase;
};
mostrarFrase();

// Funções
// Exercício 51 - Saudação, terráqueo 🛸
// Crie uma função saudacao que recebe um parâmetro nome e mostre uma mensagem de saudação,
//  por exemplo: 'Olá, Julia!'.

function saudacao(nome) {
    return 'Olá, ' + nome + '!';
  };

// Funções
// Exercício 52 - Pedido na pizzaria 🍕
// Crie uma função clientePedido que receba um parâmetro numeroPedido. Considere as condições a seguir:
// Se numeroPedido for igual a 1, retorne a mensagem 'Pizza de Calabresa';
// Se numeroPedido for igual a 2, retorne a mensagem 'Pizza de Quatro Queijos';
// Se numeroPedido for igual a 3, retorne a mensagem 'Pizza de Frango com Catupiry';
// Se numeroPedido for igual a 4, retorne a mensagem 'Pizza de Brigadeiro';
// Se numeroPedido não entrar nas condições acima, retorne a mensagem 'Número do pedido inválido!'.

function clientePedido(numeroPedido) {
    if (numeroPedido === 1) {
        return 'Pizza de Calabresa'; 
    }if (numeroPedido === 2) {
        return 'Pizza de Quatro Queijos';  
    }if (numeroPedido === 3) {
        return "Pizza de Frango com Catupiry";
    }if (numeroPedido === 4) {
        return "Pizza de Brigadeiro";
    } else {
        return'Número do pedido inválido!'
    }
}
console.log(clientePedido(3))

// Funções
// Exercício 53 - Fazendo média 🔢
// Criar uma função chamada mediaDosNumeros que recebe como parâmetro um 
//array de números chamado arrayNumeros e retorna a média desses números.
// > De olho na dica 👀 : Use uma estrutura de repetição fo
function mediaDosNumeros(arrayNumeros) {
    let soma = 0;
    let media = 0;
    for (let index = 0; index < arrayNumeros.length; index++) {
        soma = soma + arrayNumeros[index];
    }
    media = soma / arrayNumeros.length;
    return media;
}
mediaDosNumeros();
// Estrutura de repetição FOR

/*
    Ele é dividio em 3 partes
    1 - variável de controle
    2 - verificação ou condição
    3 - incremento ou modificação da variável de controle
*/



// for (let quantidade = 0; quantidade <= 10; quantidade++) {
    
//     console.log("Repetindo");
// }

// let hora = 20;

// for (let quantidade = 0; hora <= 22; quantidade++) {
    
//     console.log("Repetindo");

//     hora++;
// }


// for (let valor = 0; valor <= 100; valor += 10) {
    
//     console.log(`O valor é: ${valor}`);
// }


// 

let valorCompra = 100;
let desejaUsarCupom = true;
const imposto = 5;

if (valorCompra > 100) {
    console.log("Você ganhou um cupom de desconsto de 10 reais.");
}

if (desejaUsarCupom == true) {
    valorCompra -= 10;
    valorCompra += 19.90;
    valorCompra += 2.50;
    console.log("O valor da compra atualizado é " + valorCompra);
} 
// For In

//                   0        1         2
let sobrenomes = ["Silva", "Souza", "Santos"];

sobrenomes[0];
//console.log(sobrenomes[0])

// // Te retorna os índices
// for (let indice in sobrenomes) {
//     console.log("O indice " + indice + " possuí o valor " + sobrenomes[indice]);
// }

// // console.log("_________")

// // // Te retorna o valor dos elementos
// for (let indice of sobrenomes) {
//     console.log(indice);
// }


let arrayValores = [10, 15, 12, 20, 50, 100];
let somaTotal = 0;


for (let valor of arrayValores) {
    console.log(valor);

    somaTotal += valor;
}

console.log("O valor da soma total é " + somaTotal);

// for (let valor in arrayValores) {
//     console.log(valor);
//     console.log(arrayValores[valor]);

//     somaTotal += arrayValores[valor];
// }
// console.log("O valor da soma total é " + somaTotal);
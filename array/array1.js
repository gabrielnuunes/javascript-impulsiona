// Array

let nome1 = "Gabriel";
let nome2 = "Gabriela";
let nome3 = "Gabriella";

// let idade;


// Estrutura base do array

// let sobrenome = [];


// idade = 60;
// sobrenome = 

//elementos      1           2           3
//indices|Array  0           1           2 
let nomes = ["Gabriel", "Gabriela", "Gabriella"];
let sobrenome = ["Silva", "Souza", "Santos"];

// console.log(nomes[1] + " " + sobrenome[0]);
//console.log(nomes);

// nomes[1]
//console.log(nomes[2]); // Eu acesso os elementos através do índice

nomes[2] = "Felipe"; // Trocando o valor do índice 2
//console.log(nomes);

nomes.length
//console.log(nomes.length); // Eu mostro o tamanho do array

nomes.push("Ines"); // Aqui eu adiciono um elemento ao final do array
//console.log(nomes);

nomes.unshift("Alexandre"); // Adiciona um elemento no início do array
// console.log(nomes);
// console.log(nomes[0]);

nomes.pop(); // Remove o último elemento do array
// console.log(nomes);

nomes.shift(); // Remove um elemento do início
// console.log(nomes);

// console.log(nomes.includes("Alan"));

//             0   1   2   3   4
let valores = [10, 15, 12, 20, 50];
console.log(valores);
// console.log(valores.length);
// console.log(valores[2]);

valores[5] = "Teste";
valores[8] = "Novo valor";
console.log(valores);

valores[6] = "Mouse";

//console.log(valores[6]);
//console.log(valores[7]);


function adicionaValor (indice, valor) {   
    return valores[indice] = valor;
}

adicionaValor(6, "Mouse");

//console.log(valores)

function somaElementos(indice1, indice2) {
    console.log("A soma dos índices é " + (valores[indice1] + valores[indice2]));
}

somaElementos(1, 2);

function mediaClientes(arrayCliente, tamanhoArray) {

    arrayCliente / tamanhoArray
}
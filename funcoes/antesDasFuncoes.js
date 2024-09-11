// Estrutura base de uma função

function dizOi() {
    console.log("Dizendo oi, de dentro da função.");
}

// Chamar a função
//dizOi();
// dizOi();
// dizOi();

// Exemplo sem uso de função

// let nome = "Gabriel";
// let cidade = "Brasília";

// console.log("Meu nome é " + nome);
// console.log("Moro em " + cidade);

// let nome2 = "Ines";
// let cidade2 = "São Paulo";

// console.log("Meu nome é " + nome2);
// console.log("Moro em " + cidade2);

// function mostraDados() {
//     console.log("Meu nome é " + nome);
//     console.log("Moro em " + cidade);
//     console.log("Dentro da função");
// }

// mostraDados();

// function mostraDados2() {
//     console.log("Meu nome é " + nome2);
//     console.log("Moro em " + cidade2);
//     console.log("Dentro da função 2");
// }

// mostraDados2(); // Executa ou chama a função

function exibeDados(nomeCliente, cidadeCliente) {
    console.log("Meu nome é " + nomeCliente);
    console.log("Moro em " + cidadeCliente);
}

exibeDados("Diego", "Curitiba");
exibeDados("Luiz", "Guarulhos");

// Exemplo de undefined
// let valor;
// console.log(valor);
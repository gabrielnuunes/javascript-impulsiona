// Variáveis e Constantes

let nome = "Alan";
// console.log(nome);

nome = "Luiz";
// console.log(nome);

let resultado = 10 + 10;
// 20     =    20     * 2;
// resultado = resultado * 2;
console.log(resultado);

// console.log(10 + 10);
// console.log(resultado);

let numero1 = 10;
let numero2 = 50;

let resultadoSoma = numero1 + numero2; // 17/09/2024

// console.log(numero1 + numero2);
// console.log(resultadoSoma);

// Exemplo Diego

console.log(`A soma de ${numero1} + ${numero2} é igual a ${resultadoSoma}`);
console.log(`O resultado da soma é ${resultadoSoma}`);

// Atualizando os valores
numero1 = 10; 
numero2 = 20; 

// Somando o valor anterior com os novos valores
resultadoSoma += numero1 + numero2;

// console.log(`A soma de ${numero1} + ${numero2} somada ao valor anterior é igual a ${resultadoSoma}`);
// console.log(`O resultado da soma atualizado é ${resultadoSoma}`);

let item = "Banana";

// console.log(`Não foi encontrado o item ${item}, no banco de dados.`);


// Constante

const cpf = "000.111.222-33";

const sqlCreateCliente = `Insira na linha X o cliente Felipe com o cpf ${cpf}`;
// const sqlDeletarCliente = `Adicione um saldo de ${valor} na conta do cliente ${nome}`;

console.log(sqlCreateCliente);

const taxaMaquina = 1.05;
let venda = 35;

let valorTotalPagar = venda + taxaMaquina; // 35 + 7 = 42

console.log(valorTotalPagar);
console.log(venda + taxaMaquina)

const nomeLoja = "Loja das couves";

console.log(`A loja ${nomeLoja} agradece a preferência.`)


// Taxa de maquininha

const txMaquina = 1.05; // 5%

let valorTotalCompra = 100 * txMaquina;
console.log(valorTotalCompra);

// Exemplo com taxa variável da maquininha
// Qual é a bandeira?
// Qual o meio de pagamento?
// Qual o valor?
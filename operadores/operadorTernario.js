// Operador ternário

// Ele é mais utilizado para casos de resultados positivos ou negativos

// Verificação ? Positivo : Negativo;

let temDinheiro = false;

//                    Verificação    ?  Positivo          : Negativo;
let comprarPao = temDinheiro == true ? "Vou comprar pão!" : "Não vou comprar pão!"; 

//console.log(comprarPao);


// let idade = 16;

// //                    Verificação    ?  Positivo          : Negativo;
// let validaIdade = idade >= 18 ? "Pode entrar!" : "Não pode entrar!"; 

// console.log(validaIdade);

let ano = 2024;
let anoNascimento = 1999;

//             Verificação    ?  Positivo          : Negativo;
let validaIdade = ano - anoNascimento >= 18 ? "Pode entrar!" : "Não pode entrar!"; 

console.log(validaIdade);
console.log(ano - anoNascimento >= 18); 
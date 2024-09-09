// Estrutura de controle

// Se -> IF

/*
    Se estiverSol 
        Vamos a padaria
*/

// if (true) 
//     console.log("Vamos a padaria!");

// if (true) 
//     console.log("Não vamos a padaria!");

//Exemplo 2 idade

// let idade = 18;

// if (idade >= 18)
//     console.log("Pode entrar!"); // A 1ª linha é subordinada


// if (idade < 18)
//     console.log("Não pode entrar!");

// Exemplo 3 verificação de idade

// let idadeCliente = 10;
// let temCarteira = false;

// if (idadeCliente >= 18 || temCarteira == true)
//     console.log("Pode dirigir");


// Exemplo 4 usando bloco de código

// let saldoConta = 15;

// if (saldoConta > 0) {
//     console.log("Pode realizar uma compra!");
//     console.log("Volte sempre");
// }

// console.log("Fim da execução!");

// Exemplo 5 lidando com valores

// Exemplo 4 usando bloco de código

// let saldoConta = 15;
// let chocolate = 2;

// if (saldoConta > 0) {
//     console.log("Pode realizar uma compra!");

//     //   13    =     15     -   2
//     saldoConta = saldoConta - chocolate;

//     console.log("Querido(a) cliente seu saldo é " + saldoConta);
//     console.log("Volte sempre");
// }

//console.log("Fim da execução!");

// Else -> Senão

// let saldoConta = 0;
// let chocolate = 2;

// if (saldoConta > 0) {
//     console.log("Pode realizar uma compra!");

//     //   13    =     15     -   2
//     saldoConta = saldoConta - chocolate;

//     console.log("Querido(a) cliente seu saldo é " + saldoConta);
//     console.log("Volte sempre");
// } else {
//     console.log("Realize um emprestimo conosco.");
// }

// Else IF

let notaAluno = 8;

if (notaAluno >= 5) {
    console.log("Parabéns, você foi aprovado(a)!");
} else if (notaAluno >= 3) {
    console.log("Você está de recuperação!")
} else {
    console.log("Infelizmente, você foi reprovado(a)!");
}


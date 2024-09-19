// Funções

let nomeDoMedico = "Ines";
let especialidadeMedico = "Nutrologa";
let consultasRealizadas = 34;

// console.log(`Prezado(a) Dr(a). ${nomeDoMedico}, 
    // você realizou ${consultasRealizadas} consultas, na especialidade ${especialidade}`);

let nomeDoMedico2 = "João";
let especialidadeMedico2 = "Cardiologista";
let consultasRealizadas2 = 28;

// console.log(`Prezado(a) Dr(a). ${nomeDoMedico2}, 
    //você realizou ${consultasRealizadas2} consultas, na especialidade ${especialidade2}`);

function notificaMedico(nome, especialidade, qtdeConsultas) {

    console.log(`Prezado(a) Dr(a). ${nome}, 
    você realizou ${qtdeConsultas} consultas, na especialidade ${especialidade}`);
}

notificaMedico("Ines", "nutrologa", 34);
// notificaMedico("Felipe", "Clínico Geral", 54);
// notificaMedico("Fulano", "Ortopedista", 14);

let qtdeItens = 20;
let valorItem = 5;

function multiplicaItens(quantidade, valor) {

    console.log(`O valor total dos itens é de ${quantidade * valor}`);
}
multiplicaItens(20, 30);




function notificaCliente(cliente) {

    console.log(`Querido(a) ${cliente} o valor total dos seus itens foi atualizado`);
}

// multiplicaItens(10, 500);
// multiplicaItens(qtdeItens, valorItem);
notificaCliente("Gabriel");



// function pagamento (valor) {

//     notificarCliente();
//     // Notificar o cliente 

//     debitarConta();
//     // Debitar o valor da conta do cliente

//     registraValorFatura();
//     // Registra na fatura atual do cliente o valor
// }


// function notificarCliente (nome) {

// }

// Sem argumento e sem retorno
// Exemplo função 

function semArgSemRetorno () {

    console.log("Olá, boa noite!");
    50 * 2;

    let variavelInterna = true;
}

function semArgSemRetorno2 () {

    // verificaValorPlano();

}

semArgSemRetorno();

// Com argumento e sem retorno

function verificaValorPlano(nomePlano) {

    if (nomePlano) {
        console.log("Verificação do plano " + nomePlano + " realizada com sucesso!");        
    } else {
        console.log("Verificação do plano realizada com sucesso!");
    }

    // Aqui tem uma lógica para verificar 
}

verificaValorPlano(); // Não passo nome
verificaValorPlano("Amil"); // Passo nome

// nº carteirinha

// let maiorDeIdade = false;

// if (maiorDeIdade === true) {
//     // Doar sangue
// } else {
//     // Precisa autorização
// }

// let idade = 47;

// if (idade >= 18) {
//     // Doar sangue
// } else {
//     // Precisa autorização
// }

// let nome = false;

// if (nome) {
//     console.log("Tem nome");
// } else {
//     console.log("Não tem nome");
// }


// Sem argumento e com retorno

let saudacao = "Bom dia"

function semArgComRetrn() {

    // Pode ter outra lógica antes

    return `${saudacao}, seja bem-vindo(a) ao nosso hospital.`; 
}

semArgComRetrn(); // Chamando diretamente não sai no terminal
console.log(semArgComRetrn()); // Colocando dentro do console


// Com argumento e com retorno
// Exemplo de uma soma

function soma(valor1, valor2) {

    return valor1 + valor2;
}

soma(2, 3); // Assim não mostra no terminal, e nem acessa o valor resultante

// Na criação da variável é feito a chamada da função
//  resultadoSoma =    5
let resultadoSoma = soma(2, 3);

console.log("O resultado da soma é " + resultadoSoma);

console.log(soma(2,3)); 


//  clienteLocalizado = "Gabriel"; // Em caso de sucesso
//  clienteLocalizado = "Cliente não encontrado"; // Em caso de não localizar
let clienteLocalizado = localizaNoBanco("000.111.222-33");
console.log(clienteLocalizado); // Aqui podemos saber se houve sucesso ou não

// Verificar se o número é par

let numero1 = 8;
let numero2 = 5;

// Módulo ou o resto`
console.log(`A divisão de ${numero1} por ${numero2} é ${numero1 / numero2}`);
console.log(`O resto da divisão de ${numero1} por ${numero2} é ${numero1 % numero2}`);
console.log(`O resto da divisão de ${numero1} por ${2} é ${numero1 % 2}`);

function numeroPar(numero) {

    if (numero % 2 === 0) {
        console.log("Esse número é par")
    } else {
        console.log("Esse número não é par")
    }


}

numeroPar(10);
numeroPar(11);
numeroPar(12);

function funcaoNumeroParComRetorno (numero) {

    if (numero % 2 === 0) {
        return "Esse número é par " + numero;
    } else {
        return "Esse número não é par " + numero;
    }

}

let resultadoNumeroPar = funcaoNumeroParComRetorno(10);

console.log(resultadoNumeroPar);
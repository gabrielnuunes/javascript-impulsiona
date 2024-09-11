// Tipos de funções

// 1 - Com parâmetro e sem retorno

function tipoUm(saudacao) {
    console.log(saudacao + ", tudo bem?");
}

// tipoUm("Bom dia");
// tipoUm("Boa tarde");
// tipoUm("Boa noite");

// 2 - Sem parâmetro e sem retorno
function latir() {
    console.log("Au au au");
}

//latir();

// 3 - Com parâmetro e com retorno
function soma(numero1, numero2) {

    return numero1 + numero2;
}

soma(5,5);

// console.log(soma(5,5));
// console.log(soma(10,5));
// console.log(soma(20,5));

// Sem argumento e com retorno

function falaBomDia() {
    return "Olá, bom dia! Tudo bem?"
}

console.log(falaBomDia());


function verificaIdade(idade) {

    if(idade > 18) {
        
    }
}
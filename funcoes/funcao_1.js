// Exemplo de soma

function soma(numero1, numero2) {
    console.log(`A soma de ${numero1} com ${numero2} é ${numero1 + numero2}`);
}

function subtracao(numero1, numero2) {
    console.log(`A subtração de ${numero1} com ${numero2} é ${numero1 - numero2}`);
}

function multiplicacao(numero1, numero2) {
    console.log(`A multiplicação de ${numero1} com ${numero2} é ${numero1 * numero2}`);
}

function divisao(numero1, numero2) {
    console.log(`A divisão de ${numero1} com ${numero2} é ${numero1 / numero2}`);
}

function exponeciacao(numero1, numero2) {
    console.log(`O número ${numero1} elevado a ${numero2} é ${numero1 ** numero2}`);
}

function raizQuadrada(numero) {
    console.log(`A raiz quadrada de ${numero} é ${Math.sqrt(numero)}`);
}

function somar2(valor1, valor2) {

    let resultadoSoma = valor1 + valor2;
    console.log("O resultado da soma é " + resultadoSoma);
    console.log(`A soma de ${valor1} com ${valor2} é ${valor1 + valor2}`);
}

// somar2(5,8);
// subtracao(20,5);
// multiplicacao(2,2);


function exponenciacao(numero1, numero2) {
    console.log(`A exponenciação de ${numero1} elevado a ${numero2} é ${Math.pow(numero1, numero2)}`);
}

exponenciacao(2,2);
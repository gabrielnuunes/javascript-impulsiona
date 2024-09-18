// Variáveis
let carro = "Gol";
let tanqueCombustivel = 40;
let tanqueAtual = 35;
let tipoCombustivel = "Gasolina";
let valorParaAbastecer = 20;
let qtdeCombustivel = 0;


let precoGasolina = 5.50;
let precoAlcool = 3.50;

let formaPagamento = "Crédito";
let temCupom = true;
let descontoDinheiro = 0.05;
let descontoCupom = 0.05;
let descontoApp = 0.05;
let impostoGasolina = 1.05;
let impostoAlcool = 1.02;


// Funcionalidades

//        let numeroFormatado = numero.toFixed(2); // "123.46"
function abastecer(tipoCombustivel, valorParaAbastecer) {

    if (tipoCombustivel === "Gasolina") {
        // Calculo gasolina
        qtdeCombustivel = (valorParaAbastecer / precoGasolina).toFixed(3);    
        tanqueAtual = parseFloat(tanqueAtual) + parseFloat(qtdeCombustivel);

        

        console.log("A quantidade abastecida foi " + qtdeCombustivel + " agora o tanque possui " +  tanqueAtual)

    } else if (tipoCombustivel === "Álcool"){
        // Calculo álcool
        qtdeCombustivel = (valorParaAbastecer / precoAlcool).toFixed(3);    
        tanqueAtual = parseFloat(tanqueAtual) + parseFloat(qtdeCombustivel);

        console.log("A quantidade abastecida foi " + qtdeCombustivel + " agora o tanque possui " +  tanqueAtual)
    } else {
        console.log("O tipo de combustível informado não existe.")
    }

}

function pagamento(formaPagamento) {

    switch (formaPagamento) {
        case "Dinheiro": case "Pix":

            
            console.log(valorDesconto)

            // console.log(`O valor total a pagar é: ${valorParaAbastecer *= descontoDinheiro}`);

            break;
        case "Crédito":

        console.log(`O valor total a pagar com crédito é: ${valorParaAbastecer *= impostoGasolina}`);
        console.log(`O valor total a pagar com crédito é: ${valorParaAbastecer *= impostoAlcool}`);

            break;
        case "Aplicativo":
            
            break;

        default:
            console.log("A forma de pagamento desejada, não temos.")
            break;
    }

}



function verificaQtdeCombustivel (tanqueCombustivel, tanqueAtual) {

    if (tanqueCombustivel > tanqueAtual) {

    }

}

function utilizaAplicativo () {

}

function calculaDescontoAplicativo() {

}

//                0 1 2 3 4 5 6
let qtdeCortes = [1,2,3,4,5,6,7];
let agendaHorario = ["08:00", ]
// 10 cortes ele ganha um corte

function adicionaCorteCliente(numeroDoCorte) {

    if (qtdeCortes.length == 9) {
        console.log("Ganhou um corte!")
    }

    qtdeCortes.push(numeroDoCorte);

    console.log(qtdeCortes);
}

let salariosClientes = [1,2,3,4,5,6,7];

function calculaMediaRenda (salariosClientes) {

}

adicionaCorteCliente(8);
adicionaCorteCliente(9);
adicionaCorteCliente(10);




// Testes

// abastecer("Gasolina", 30);
// abastecer("Álcool", 25);

// pagamento("Dinheiro");
// pagamento("Crédito");






// Descobrir os tipos de dados 
// typeof

// console.log(typeof "Gabriel")
// console.log(typeof 10);
// console.log(typeof false);



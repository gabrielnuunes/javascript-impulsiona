// Variáveis
let carro = "Gol";
let tanqueCombustivel = 40;
let tanqueAtual = 15;
let tipoCombustivel = "Gasolina";
let valorParaAbastecer = 20;
let qtdeCombustivel = 0;


let precoGasolina = 5.50;
let precoAlcool = 3.50;

let formaPagamento = "Crédito";
let temCupom = true;
let descontoApp = 0.05;
let impostoGasolina = 1.05;
let impostoAlcool = 1.02;


// Funcionalidades

//        let numeroFormatado = numero.toFixed(2); // "123.46"
function abastecer(tipoCombustivel, valorParaAbastecer) {

    if (tipoCombustivel === "Gasolina") {
        // Calculo gasolina
        qtdeCombustivel = (valorParaAbastecer / precoGasolina).toFixed(3);

        console.log("Quantidade do tanque antes de abastecer " + tanqueAtual);

        tanqueAtual += qtdeCombustivel;
        console.log("Quantidade abastecida " + qtdeCombustivel);
        console.log("Quantidade do tanque após abastecer " + tanqueAtual);

    } else if (tipoCombustivel === "Álcool"){
        // Calculo álcool
    } else {
        console.log("O tipo de combustível informado não existe.")
    }

}

function pagamento() {

}

// Testes

abastecer("Gasolina", 30);

// Operador Switch

// Ele é ideal para seleção de multiplos valores

// let nota = 4;

// switch (nota) {
//     case 7:
//         console.log("Você passou com nota 7!");
//         break;
//     case 5:
//         console.log("Você passou com nota 5!");
//         break;
//     case 4:
//         console.log("Você passou com nota 4!");
//         break;
//     default:
//         console.log("A nota informada é inválida.");
// }


let nota = 9;
let desejaReceberPresente = false;

switch (nota) {
    case 10: case 9: 
        console.log("Você passou!");

        if (desejaReceberPresente == true) {
            console.log("Ganhou um presente");
        }

        break;
    case 8: case 7: case 6: case 5:    
        console.log("Você passou!");
        break;
    case 4: case 3:
        console.log("Você está de recuperação!");
        break;
    case 2: case 1: case 0:
        console.log("Você foi reprovado(a)!");
        break; 
    default:
        // console.log("A nota informada é inválida.");
        console.log(`O valor "${nota}" é um valor inválido, verifique e tente novamente`);
}

// Switch com horas 

let hora = 10;

switch (hora) {
    case 8: case 7: case 6: case 5: case 9: case 10:
        console.log("Bom dia!");
        break;

    default:
        console.log("Hora informada não existe.");
        console.log(`A hora "${nota}" informada não é valida, informe uma hora entre 0 e 23`);
        break;
}

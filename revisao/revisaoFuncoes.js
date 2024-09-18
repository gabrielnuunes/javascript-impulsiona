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

// notificaMedico("Ines", "Nutrologa", 34);
// notificaMedico("Felipe", "Clínico Geral", 54);
// notificaMedico("Fulano", "Ortopedista", 14);

let qtdeItens = 20;
let valorItem = 5;

function multiplicaItens(quantidade, valor) {

    console.log(`O valor total dos itens é de ${quantidade * valor}`);
}

function notificaCliente(cliente) {

    console.log(`Querido(a) ${cliente} o valor total dos seus itens foi atualizado`);
}

// multiplicaItens(10, 500);
// multiplicaItens(qtdeItens, valorItem);
multiplicaItens(20, 30);
notificaCliente("Gabriel");
// construir um menu que e possivel escolher u exercicio entre os
//  construir um menu que e possivel escolher um exercicos entre exercicios anteriores, para ser executado. Faca com que o menu
//repita a sua execucao, disponibilize  as opcoes para o usuario, ate
// que seja digitado "sair"



function exercicioNumero() {
    let numero = 0;

    console.log("Números pares de 0 a 20:");

    while (numero <= 20) {
        if (numero % 2 === 0) {
            console.log(numero);
        }
        numero++;
    }
}

let opcao = window.prompt("MENU\nDigite a opcao desejada:\n\n1 - Exemplo funcoes")

switch (opcao) {
    case "1":
        exercicioNumero()

        break;

    default:
        break;



}

let palavra;

do {
    palavra = prompt("Digite um número (digite 0 para sair):");
} if (palavra !== "sair");

console.log("Você digitou sair. O programa terminou.");

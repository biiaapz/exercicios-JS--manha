//9. Faça um programa que receba um número do usuário e mostre
//no console a contagem regressiva até 0.

// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let numero = parseInt(prompt("Digite um número para a contagem regressiva:"));

    console.log("Contagem regressiva esta começando em:" + numero);
    
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }

    console.log("contagem regressiva finalizada!");

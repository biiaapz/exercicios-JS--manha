//Exercício 5: Verificação de números em ordem crescente
//Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
//crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
//não.

let ordem1 = parseInt(promp ("digite o primeiro numero: "))
let ordem2 = parseInt(promp ("digite o segundo numero: "))
let ordem3 = parseInt(promp ("digite o terceiro numero: "))

if (ordem1 > ordem2 && ordem2 > ordem3){
    console.log ("esta em ordem crescente")
}
else {
    console.log ("nao esta crescente")
}


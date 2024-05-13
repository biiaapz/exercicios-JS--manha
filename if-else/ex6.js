//Exercício 6: Verificação de idade
//Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
//de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let anoNacimento = parseInt (prompt("digite seu ano de nascimento: "))

let anoAtual = new Date().getFullYear(2024)

let idade = anoAtual - anoNacimento

if(idade >= 18){
    console.log ("Voce e maior de idade!")
}
else{
    console.log("Voce nao e maior de idade!")
}
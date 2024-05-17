// construir um menu que e possivel escolher u exercicio entre os
//  construir um menu que e possivel escolher um exercicos entre exercicios anteriores, para ser executado. Faca com que o menu
//repita a sua execucao, disponibilize  as opcoes para o usuario, ate
// que seja digitado "sair"

function exercicioDia() {
    let dia = prompt("digite um numero de 1 a 7: ") 

    if (dia == 1)  {console.log("hoje e segunda feira")}

    if (dia == 2)  {console.log("hoje e terca feira")}

    if (dia == 3)  {console.log("hoje e quarta feira")}

    if (dia ==4)  {console.log("hoje e quinta feira")}

    if (dia == 5)  {console.log("hoje e sexta feira")}

    if (dia == 6) {console.log("hoje e sabado")}

    if (dia == 7)  {console.log("domigo")}
}



function exercicioParImpar () {
let numero = parseInt(prompt("digite um numero: "))

if (numero % 2 == 0) {console.log("numero par!") }

else {console.log("numero impar!")}
}



function exercicioMedia () {
    let nota1 = parseInt(prompt("adicione a primeira nota: "))
let nota2 = parseInt(prompt("adicione a segunda nota: "))
let nota3 = parseInt(prompt("adicione a terceira nota: "))
let nota4 = parseInt(prompt("adicione a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4


if(media >= 7){
    console.log("APROVADO");
}

else if(media < 7 && media >= 5){
    console.log("RECUPERAÇÃO");
}

else{
    console.log("REPROVADO");
}

}



function Verificaçãodenúmerosemordemcrescente () {

let primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
let segundoNumero = parseInt(prompt("Digite o segundo número: "));
let terceiroNumero = parseInt(prompt("Digite o terceiro número: "));

if(primeiroNumero < segundoNumero && segundoNumero < terceiroNumero){
    console.log("Os números estão em ordem crescente!!!")
}
else{
    console.log("Os números NÃO estão em ordem crescente!!!")
}
}



function eImprimirnúmerosparesde1a10 () {
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
}



function Imprimirosprimeiros10númerosdasequênciadeFibonacci () {

const numero = parseInt(prompt("Coloque um numero para realizarmos a sua tabuada ate o 10:"));

if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
}

let resposta = window.prompt("MENU\nDigite a opcao desejada: \n\n1 - Exercicio Dia \n\n2 - Exercicio Par ou Impar \n\n3 - Exercicio Média \n\n4 - Exercicio Verificação de números em ordem crescente \n\n5 - Exercicio Imprimir números pares de 1 a 10 \n\n6 - Exercicio Imprimir os primeiros 10 números da sequência de Fibonacci")

while (resposta != "sair") {


switch (resposta) {
    case "1":
        exercicioDia()
        break;

    case "2":
        exercicioParImpar()
        break;

    case "3":
        exercicioMedia ()
        break;

    case "4":
        Verificaçãodenúmerosemordemcrescente()
        break;    

    case "5":
        eImprimirnúmerosparesde1a10()
        break;

    case "6":
        Imprimirosprimeiros10númerosdasequênciadeFibonacci()
        break;

    default:
        break
}

resposta = window.prompt("MENU\nDigite a opcao desejada: \n\n1 - Exercicio Dia \n\n2 - Exercicio Par ou Impar \n\n3 - Exercicio Média \n\n4 - Exercicio Verificação de números em ordem crescente \n\n5 - Exercicio Imprimir números pares de 1 a 10 \n\n6 - Exercicio Imprimir os primeiros 10 números da sequência de Fibonacci")


}
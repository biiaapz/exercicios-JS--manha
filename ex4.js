// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota1 = parseInt(prompt("Adicione a primeira nota:" ))
let nota2 = parenInt(prompt("Adicione a segunda nota:" ))
let nota3 = parenInt(prompt("Adicione a terceira nota:" ))
let nota4 = parenIntw(prompt("Adicione a quarta nota:" ))

//some as notas

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log (media)

//faça a media das notas

//aprovado = 7 ou maior
//recuperacao entre 5 e 7
//reprovacao manos 5

if(media >= 7) {
    console.log ("aprovado!")
}

else if (media > 4 && media < 7){
    console.log ("recuperacao")
}
else if (media > 5 && media < 7){
    console.log ("reprovado")
}

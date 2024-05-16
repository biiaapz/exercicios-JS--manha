function saudacao() {
    let nomePessoa = prompt("Digite seu nome: ")

    let horaAtual = new Date().getHours()

    if (horaAtual > 6 && horaAtual < 13) {
        window.alert("Bom dia " + nomePessoa)
    } else if (horaAtual >= 13 && horaAtual < 18) {
        window.alert("Boa tarde " + nomePessoa)
    } else {
        window.alert("Boa noite " + nomePessoa)                                              
    }

}

saudacao()

function somar(num1, num2, num3){ 
let soma = num1 + num2 + num3

return soma

}

//let resultado = somar(5, 6, 9) // 40
//let resultado2 = somar(1, 1, 1) // 3

//console.log("o resultado e: " + resultado);

//funçoes
//window.alert ("iujdfiuhyweof")
//console.log("outro texto")
//window.prompt("digite algo:")

//exemplo objeto

let professor = {
    nome: "Thiago",
    sobrenome: "Nascimento",
    idade: 26
}

let produto = {
nome: "controle remoto",
marca: "Philco",
modelo:"XRCTFG-456",
preco: 30.0

        
}
let Window = {
    innerWidth
}

//professor.nome = prompt("digite o nome")
//professor.sobrenome = prompt("digite sobrenome")
// professor.idade=parseInt prompt("digite sua idade")


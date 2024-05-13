//Exercício 1: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha.
//Verifique se o nome de usuário é "admin"; e a senha é "senha123";. 
//Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

//Solicita ao usuário um nome de usuário 
let username = prompt("Digite um nome de usuário: ");

//Solicita ao usuário ut dtma senha
let senha = prompt("Digite a senha: ");

//Verifique se o nome de usuário é "admin"; e a senha é "senha123"
//CASO SIM -> Exiba a mensagem de login bem sucedida.
//CASO NAO -> Exiba a mensagem de usuario ou senha incorreta.

if (username == "admin" && senha == "senha123"){
   console.log("Login bem sucedido")
} 

else{
    console.log ("Login Incorreto")
}
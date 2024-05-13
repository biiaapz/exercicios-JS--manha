//for - loop contato

// Contanto de 0 a 10
//

//While - loop condicional
//let salario = 1000;
//while (salario < 5000){
//Salario = salario +100;
salario += 100;
console.log("o salario ainda e R$" + salario);
//}

//do white - loop condicional
//let saldo = 1000;

//do{
//  console.log("esse e o saldo" +saldo)
//  saldo+= 100;

//}while(saldo <5000);

//array


let frutas = ["Banana", "Laranja", "Maca", "Pitaya", "Melancia"];

//console.log(fruta [3]);

//frutas.forEath(fruta => {
//console.log ("A fruta e: " + fruta);
//});
//.length => quantidade de elementos dentro de um array
for (let indice = 0; indice < 5; indice++) {
    console.log(frutas[indice]);
    if(frutas[indice] == "pitaya"){
        console.log("eu gosto de " + frutas[indice])
    }
}

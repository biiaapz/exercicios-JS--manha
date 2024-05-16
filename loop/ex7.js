//7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
//while.

// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let numero = 1;
let soma = 0;

while (numero <= 100) {
    soma += numero;
    console.group(soma)
    numero++;
}

console.log("a soma dos numeros de 1 a 100 sao:" + soma);
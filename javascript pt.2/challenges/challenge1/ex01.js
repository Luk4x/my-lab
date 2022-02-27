// [ ] Escreva um programa onde, você chame uma função enviando um número, a função deve imprimir na tela os números de 1 até o número que você enviou

prompt = require('prompt-sync')();

let userNum = parseInt(prompt('How much do you wanna count? '));
console.log();

const count = function (num) {
    if (num <= 0) {
        for (i = 1; i >= num; i--) {
            console.log(i);
        }
    } else {
        for (i = 1; i <= num; i++) {
            console.log(i);
        }
    }
};

count(userNum);

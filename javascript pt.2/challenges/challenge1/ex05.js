// [ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior.

const bigger = function(n1, n2) {
    if(n1>n2) {
        return n1
    } else if(n2>n1){
        return n2
    } else {
        return 'none, both are equals'
    }
}

const prompt = require('prompt-sync')()

let userNum1 = parseInt(prompt('Enter a number: '))
let userNum2 = parseInt(prompt('Enter another number: '))

console.log(`The largest number between ${userNum1} and ${userNum2} is: ${bigger(userNum1, userNum2)}.`)
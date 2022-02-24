const prompt = require('prompt-sync')()

let num1 = parseInt(prompt('Enter a number: '))
let num2 = parseInt(prompt('Enter another number: '))

const sum = function(n1, n2) { // expression/anonymous function
    return n1+n2
}

console.log(`\nThe sum between ${num1} and ${num2} is: ${sum(num1, num2)}.`)
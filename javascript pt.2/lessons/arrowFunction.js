const prompt = require('prompt-sync')()

let num1 = parseInt(prompt('Enter a number: '))
let num2 = parseInt(prompt('Enter another number: '))

const sum = (n1, n2) => n1+n2 // simpler arrow function

console.log(`\nThe sum between ${num1} and ${num2} is: ${sum(num1, num2)}`)
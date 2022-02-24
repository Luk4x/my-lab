const prompt = require('prompt-sync')()

let num1 = parseInt(prompt('Enter a number: '))
let num2 = parseInt(prompt('Enter another number: '))

let result = sum(num1, num2)
console.log(`\nThe sum between ${num1} and ${num2} is ${result}`)

function sum(n1, n2) {
    let result = n1+n2
    return result
}
function sum(n1, n2) { // function parameters (local scope)
    let result = n1+n2
    console.log(result)
}

const prompt = require('prompt-sync')()

let num1 = parseInt(prompt('Enter a number: '))
let num2 = parseInt(prompt('Enter another number: '))

console.log(`The sum between ${num1} and ${num2} is:`)
sum(num1, num2) // function arguments
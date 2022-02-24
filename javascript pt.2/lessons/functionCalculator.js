// requiring prompt-sync
const prompt = require('prompt-sync')()

// getting information from user
let num1 = parseInt(prompt('Enter a number: '))
let num2 = parseInt(prompt('Enter another number: '))
console.log()

// functions
function sum(n1, n2) {
    let result = n1+n2
    return result
}

const subtraction = function(n1, n2) {
    let result = n1-n2
    return result
}

const multiplication = (n1, n2) => {
    let result = n1*n2
    return result
}

const division = (n1, n2) => n1/n2

const restDivision = function(n1, n2) {
    return n1%n2
}

// result
console.log(`${num1} + ${num2} = ${sum(num1, num2)}`)
console.log(`${num1} - ${num2} = ${subtraction(num1, num2)}`)
console.log(`${num1} * ${num2} = ${multiplication(num1, num2)}`)
console.log(`${num1} / ${num2} = ${division(num1, num2)}`)
console.log(`${num1} % ${num2} = ${restDivision(num1, num2)}`)
// [ ] Faça um programa onde leia um numero e diga se ele é par ou impar.

const prompt = require('prompt-sync')()

const userNum = parseInt(prompt('Enter a number: '))

if(userNum%2 == 0) {
    console.log(`${userNum} it's an even number.`)
} else {
    console.log(`${userNum} it's an odd number.`)
}
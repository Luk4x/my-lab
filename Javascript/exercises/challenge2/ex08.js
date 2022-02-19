// [ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const prompt = require('prompt-sync')()

const userNum = parseInt(prompt('Enter a number: '))

if(userNum%2 === 0) {
    console.log(`${userNum} it's an even number.`)

    if(userNum%5 === 0) {
        console.log('And is also divisible by 5.')
    }
} else {
    console.log(`${userNum} it's an odd number.`)

    let isPrime = true
    for(let i=2;i<userNum;i++) {
        if (userNum%i === 0) {
            isPrime = false
        }
    }

    if(isPrime) {
        console.log('And is also a prime number.')
    }
}
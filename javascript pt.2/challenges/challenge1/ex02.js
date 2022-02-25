// [ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const table = num => {
    if(num>=1 && num<=10) {
        console.log(`The table of ${num} is:`)
        for(i=1;i<=10;i++) {
            console.log(`${i} x ${num} = ${i*num}`)
        }
    } else {
        console.log('Error: Enter only numbers from 1 to 10.')
    }
}

const prompt = require('prompt-sync')()

let userNum = parseInt(prompt('Enter a number [1-10]: '))
console.log()

table(userNum)
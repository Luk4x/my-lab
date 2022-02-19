// [ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const prompt = require('prompt-sync')()
let nums = []

// filling the array
for(let i=0;i<4;i++) {
    nums.push(parseInt(prompt(`Enter ${i===0? 'a' : 'another'} number: `)))
}

let evenNums = 0

for(let num of nums) {
    if (num%2 == 0) {
        evenNums++
    }
}

switch (evenNums) {
    case 0:
        console.log('All numbers are odd.')
    break

    case 4:
        console.log('All numbers are even.')
    break

    default:
        console.log('All numbers are random.')
}
// [ ] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"

const prompt = require("prompt-sync")()
const num1 = 10
const userNum = prompt('Enter a number: ')

if(userNum<num1) {
    console.log(`${num1} is the largest and ${userNum} is the smallest.`)
} else if (userNum>num1) {
    console.log(`${userNum} is the largest and ${num1} is the smallest.`)
} else {
    console.log(`${num1} and ${userNum} are equal.`)
}
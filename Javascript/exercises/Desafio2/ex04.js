// [ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const prompt = require("prompt-sync")()

const num1 = prompt('Enter a number: ')
const num2 = prompt('Enter another number: ')
const num3 = prompt('Enter another number: ')

if(num1 > num2 && num1 > num3) {
    if(num2 > num3) {
        console.log(`${num1} is the largest. \n${num2} is the intermediary. \n${num3} is the smallest.`)
    } else if (num1 < num2) {
        console.log(`${num1} is the largest. \n${num3} is the intermediary. \n${num2} is the smallest.`)
    } else {
        console.log("You can't enter equal numbers!")
    }
} else if (num2 > num1 && num2 > num3) {
    if(num1 > num3) {
        console.log(`${num2} is the largest. \n${num1} is the intermediary. \n${num3} is the smallest.`)
    } else if (num1 < num2) {
        console.log(`${num2} is the largest. \n${num3} is the intermediary. \n${num1} is the smallest.`)
    } else {
        console.log("You can't enter equal numbers!")
    }
} else if (num3 > num1 && num3 > num2) {
    if(num1 > num2) {
        console.log(`${num3} is the largest. \n${num1} is the intermediary. \n${num2} is the smallest.`)
    } else if (num1 < num2) {
        console.log(`${num3} is the largest. \n${num2} is the intermediary. \n${num1} is the smallest.`)
    } else {
        console.log("You can't enter equal numbers!")
    }
} else {
    console.log("You can't enter equal numbers!")
}
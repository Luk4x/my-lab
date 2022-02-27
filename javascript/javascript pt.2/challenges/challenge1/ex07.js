/*
    [ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 

    - Você deve enviar como argumentos da função
    - Valor inicial investido - Valor atual do investimento
    - Tempo em meses, que o valor está investido
    - A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo: https://youtu.be/lhJJX69I8ak
    (Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo)
*/

const prompt = require('prompt-sync')();
console.log();

const calcInterest = (initialValue, currentValue, months) => {
    let interest = currentValue - initialValue;
    let rate = interest / (initialValue * months);
    rate *= 100;
    rate = rate.toString().replace('.', ',');
    return rate;
};

let initialValue = parseInt(prompt('Enter the initial value: '));
let currentValue = parseInt(prompt('Enter the current value: '));
let months = parseInt(prompt('Enter time in months: '));
console.log();
console.log(`The monthly interest rate was ${calcInterest(initialValue, currentValue, months)}%.\n`);

// [ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const prompt = require("prompt-sync")()
const randomNum = Math.floor(Math.random() * 10) + 1
const userNum = prompt('Enter a number between 1 and 10: ')

if(userNum == randomNum) {
    console.log('Congratulations, you won!')
} else {
    console.log(`You lose :( \nThe right number was ${randomNum}.`)
}
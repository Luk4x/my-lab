// [ ] Faça um programa que verifica se uma pessoa é brasileira ou não. DEVE SER UM OBJETO

const prompt = require("prompt-sync")()

let user = {
    country: ''
}

user.country = prompt('What country were you born in? ')
user.country = user.country.toUpperCase()

if(user.country === 'BRASIL' || user.country === 'BR') {
    console.log('Então você é brasileiro.')
} else {
    console.log("So you're a foreigner.")
}

console.log('\n')
console.log(user)
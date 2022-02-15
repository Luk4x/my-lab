// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const object1 = {
    name: 'Ikaru'
}

const object2 = {
    name: 'Takashi'
}

const result = object1.name==object2.name

console.log(result)
// [ ] Crie 5 objetos nesse formato:
// { nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

const prompt = require('prompt-sync')()

// building the objects
let user = {
    name: undefined,
    age: undefined,
    sex: undefined,
    profession: undefined,
    nationality: undefined
}

const auto1 = {
    name: 'Ícaro Silva',
    age: 15,
    sex: 'Male',
    profession: 'Student',
    nationality: 'Brazilian'
}

const auto2 = {
    name: 'Lan Fan',
    age: 17,
    sex: 'Female',
    profession: 'Student',
    nationality: 'Chinese'
}

const auto3 = {
    name: 'Jin Yuhen',
    age: 39,
    sex: 'Male',
    profession: 'Literature Teacher',
    nationality: 'South Korean'
}

const auto4 = {
    name: 'Nathalia Santos',
    age: 23,
    sex: 'Female',
    profession: 'System Analyst',
    nationality: 'Brazilian'
}

// filling user object
for(let property in user) {
    if(property === 'age') {
        user[property] = parseInt(prompt(`Enter your ${property}: `))
    } else {
        user[property] = prompt(`Enter your ${property}: `)
        if(user[property].toUpperCase() === 'BRAZIL' || user[property].toUpperCase() === 'BRAZILIAN' || user[property].toUpperCase() === 'BRASIL' || user[property].toUpperCase() === 'BRASILEIRO') {
            user[property] = 'Brazilian'
        }
    }
}
console.log()

// putting objects in an array
const people = [user, auto1, auto2, auto3, auto4]

//checking whether or not the person is approved.
for(let person of people) {
    if(person['age'] >= 18 && person['nationality'] === 'Brazilian') {
        console.log(`${person.name} is approved.`)
        person.approved = true
    } else if (person['age'] >= 18 && person['nationality'] !== 'Brazilian') {
        console.log(`${person.name} is disapproved because doesn't have Brazilian nationality.`)
        person.approved = false
    } else if (person['age'] <= 18 && person['nationality'] === 'Brazilian') {
        console.log(`${person.name} is disapproved because isn't of legal age.`)
        person.approved = false
    } else {
        console.log(`${person.name} is completely disapproved.`)
        person.approved = false
    }
}
console.log()

// showing array objects
console.log('\n\nPeople info:')
for(let person of people) {
    console.log(person)
}
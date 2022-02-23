const age = 18
const studying = true
const person = {
    names: {
        first: 'Lucas',
        secound: 'Maciel',
        third: 'Francisco'
    },
    height: 1.8
}

console.log(typeof age)
console.log(typeof 1)
console.log()

console.log(typeof studying)
console.log(typeof false)
console.log()

console.log(typeof person)
console.log(typeof person.names)
console.log(typeof {a: 1, b: '1'})
console.log()

console.log(typeof person.names.first)
console.log(typeof 'Ikaru')
console.log('\n')

console.log(person)
console.log()

delete person.names.third
console.log(person)
console.log()

delete person.names
console.log(person)
console.log()

delete person.height
console.log(person)
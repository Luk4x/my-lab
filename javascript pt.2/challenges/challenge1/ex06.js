/*
[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:
- média do salário da população;
- média do número de filhos;
- maior salário;
- O final da leitura de dados se dará com a entrada de um salário negativo.
- Faça isso usando uma função!
*/

// initial declarations
const prompt = require('prompt-sync')()
let population = []

// registering people
let question = ''
let i = 0

do {
    console.log('\n===========================================')
    i++
    console.log(`                Inhabitant ${i}\n`)
    let name = prompt(`Enter a name to him: `)
    let salary = parseInt(prompt(`Enter a salary to ${name}: R$`))
    let childrenAmount = parseInt(prompt(`Enter how many childrens ${name} has: `))

    population.push({
        name: name,
        salary: salary,
        childrenAmount: childrenAmount
    })

    console.log('')
    question = prompt('Wanna register more inhabitants [y/n]? ')
} while(question!='n')

// showing population
console.log('\n-------------------------------------------\n')
console.log(population)
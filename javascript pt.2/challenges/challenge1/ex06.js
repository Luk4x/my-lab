/*
[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:
    - média do salário da população;
    - média do número de filhos;
    - maior salário;
    - O final da leitura de dados se dará com a entrada de um salário negativo.
    - Faça isso usando uma função!
*/

// initial declarations
const prompt = require('prompt-sync')();
let population = [];

// registering people
const research = function () {
    let question = '';
    let i = 0;

    do {
        console.log('\n=======================================================');
        i++;

        console.log(`\n                      Inhabitant ${i}\n`);
        let name = prompt(`Enter a name to him: `);
        let salary = parseInt(prompt(`Enter a salary to ${name}: R$`));
        let childrenAmount = parseInt(prompt(`Enter how many children ${name} has: `));

        population.push({
            name: name,
            salary: salary,
            childrenAmount: childrenAmount
        });

        console.log();
        question = prompt('Wanna register more inhabitants [y/n]? ');
    } while (question != 'n');
};
research();

// showing population array (research data)
console.log('\n-------------------------------------------------------\n');
console.log(population);
console.log('\n-------------------------------------------------------');

// processing research data
const researchResult = array => {
    let averageSalary = 0;
    let averageChildrenAmount = 0;
    let higherSalary = 0;
    let nameHigherSalary = '';

    for (person of array) {
        averageSalary += person.salary;
        averageChildrenAmount += person.childrenAmount;
        if (person.salary > higherSalary) {
            higherSalary = person.salary;
            nameHigherSalary = person.name;
        }
    }

    averageSalary /= array.length;
    averageChildrenAmount = Math.round(averageChildrenAmount / array.length);

    console.log(`\n                   -Research Results-\n`);
    console.log(`The average Wage is: R$${averageSalary.toFixed(2)}.`);
    console.log(`The average children amount is: ${averageChildrenAmount}.`);
    console.log(`${nameHigherSalary} has the highest salary of: R$${higherSalary.toFixed(2)}.`);
    console.log('\n-------------------------------------------------------\n');
};
researchResult(population);

const people = [
    { name: 'Ayrton', age: 27 },
    { name: 'João', age: 14 },
    { name: 'Maria', age: 23 },
    { name: 'Joana', age: 21 },
    { name: 'Matheus', age: 15 },
    { name: 'Lucas', age: 32 },
    { name: 'Isa', age: 23 },
    { name: 'Luíza', age: 17 }
];

// separating people by major and minor legal age
const peopleByLegalAge = people.reduce(
    (peopleByLegalAge, person) => {
        let majorOrMinor = person.age >= 18 ? 'major' : 'minor';
        peopleByLegalAge[majorOrMinor].push(person);

        return peopleByLegalAge;
    },
    { major: [], minor: [] }
);
console.log(peopleByLegalAge);
console.log();

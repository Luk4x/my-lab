console.log();

const people = [
    { name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
    { name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
    { name: 'Ana', age: 18, federativeUnit: 'Alagoas' },
    { name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
    { name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
    { name: 'Aline', age: 19, federativeUnit: 'Brasília' }
];

// organizing people by age
const peopleAgeCount = people.reduce((ageCount, { age }) => {
    ageCount[age] = ageCount[age] + 1 || 1;
    return ageCount;
}, {});

console.log(peopleAgeCount);
console.log();

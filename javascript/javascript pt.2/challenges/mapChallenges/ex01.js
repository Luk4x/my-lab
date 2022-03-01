// Pessoas que tem vip devem ficar na seção preta, e pessoas que não tem devem ficar na seção verde.

console.log();

const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Júlio', vip: false }
];
console.log(list);

const newList = list.map(person => {
    person.sector = person.vip ? 'Black' : 'Green';
    return person;
});

console.log(newList);

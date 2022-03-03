// extra by me: grouping people by age

const people = [
    { name: 'Kyle', age: 26 },
    { name: 'John', age: 31 },
    { name: 'Sally', age: 42 },
    { name: 'Jill', age: 42 }
];

const groupedPeople = people.reduce((grouped, person) => {
    if (grouped[person.age] == null) grouped[person.age] = [];

    grouped[person.age].push(person.name);
    return grouped;
}, {});
console.log(groupedPeople);

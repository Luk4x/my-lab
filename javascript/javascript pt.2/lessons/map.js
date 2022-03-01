console.log();

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log();

const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);
console.log();

function interest(number) {
    return number + 10;
}

const toReal = number => `R$${number.toFixed(2)}`;

const doubleNumbersWithInterestAndToReal = doubleNumbers.map(interest).map(toReal);
console.log(doubleNumbersWithInterestAndToReal);
console.log();

const students = [
    { name: 'Rodolfo', age: 25 },
    { name: 'Maria', age: 43 },
    { name: 'João', age: 21 },
    { name: 'Bruna', age: 43 },
    { name: 'Carla', age: 13 },
    { name: 'Ana', age: 20 },
    { name: 'Júlio', age: 26 }
];
console.log(students);
console.log();

const newStudents = students.map(student => {
    student.name += ' Dev';
    student.age += 2;
    student.school = 'DevClub';
    return student;
});
console.log(newStudents);
console.log();

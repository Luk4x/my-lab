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

let averageAge = 0;
students.forEach((student, i, array) => {
    console.log(`Name: ${student.name}.\nAge: ${student.age}.\nPosition: ${i}.\nStudents present in class: ${array.length}.\n`);
    averageAge += student.age;
});

averageAge /= students.length;
console.log(`The average age of students is ${averageAge.toFixed(0)}.\n`);

/*
                same thing, but without arrow function:

students.forEach(function (student, i, array) {
    console.log(`Name: ${student.name}.\nAge: ${student.age}.\nPosition: ${i}.\nStudents present in class: ${array.length}.\n`);
    averageAge += student.age;
});
*/

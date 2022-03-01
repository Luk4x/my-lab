// Estudantes que tiraram nota acima de 7 estão aprovados, os outros estão reprovados.

console.log();

const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Júlio', testGrade: 10 }
];
console.log(students);

const calcResult = function (student) {
    if (student.testGrade >= 7) {
        student.finalResult = 'Approved';
    } else {
        student.finalResult = 'Disapproved';
    }

    delete student.testGrade;

    return student;
};

const studentsResult = students.map(calcResult);

console.log(studentsResult);

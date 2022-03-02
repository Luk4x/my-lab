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

const vipList = list.filter(person => {
    return person.vip;
});
console.log(vipList);
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

const approvedStudents = students.filter(student => student.testGrade >= 7);
console.log(approvedStudents);
console.log();

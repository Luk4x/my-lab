const professional = { name: 'X', profession: 'Programmer' };
const skillsLevel = { frontEnd: 9, backEnd: 6, deploy: 3 };
const person = { ...professional, ...skillsLevel, deploy: 4 }; // spreading professional and skillsLevel content in person and overwriting deploy
console.log(person);

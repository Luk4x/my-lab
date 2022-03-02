// extra by me:

console.log();

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male'
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male'
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female'
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male'
    }
];

// getting characters who has mass from 50 to 130
const charactersMass50to130 = characters.filter(character => character.mass >= 50 && character.mass <= 130);
console.log(charactersMass50to130);
console.log();

// getting female characters
const femaleCharacters = characters.filter(character => character.gender === 'female');
console.log(femaleCharacters);
console.log();

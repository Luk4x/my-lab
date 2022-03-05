// extra by me

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

// getting total mass of all characters
const charactersTotalMass = characters.reduce((totalMass, character) => totalMass + parseInt(character.mass), 0);
console.log(charactersTotalMass);
console.log();

// getting total height fo all characters
const charactersTotalHeight = characters.reduce((totalHeight, character) => totalHeight + parseInt(character.height), 0);
console.log(charactersTotalHeight);
console.log();

// separating characters name by eye color
const charactersNameByEyeColor = characters.reduce((separated, character) => {
    if (separated[character.eye_color] == null) separated[character.eye_color] = []; // 'if this property that refers to eye color (which by the way is the value of a property of the array object I'm dealing with) doesn't exist, create it in array format.'

    separated[character.eye_color].push(character.name);
    return separated;
}, {});
console.log(charactersNameByEyeColor);
console.log();

// separating characters name by gender
const charactersNameByGender = characters.reduce((separated, character) => {
    if (separated[character.gender] == null) separated[character.gender] = [];
    separated[character.gender].push(character.name);
    return separated;
}, {});
console.log(charactersNameByGender);
console.log();

// getting total number of characters in all characters name
const charactersNameLength = characters.reduce((charactersNameLength, character) => {
    charactersNameLength[character.name] = character.name.length - 1; // -1 -> removing space
    return charactersNameLength;
}, {});
console.log(charactersNameLength);
console.log();

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

// getting all array names and heights
const charactersNamesAndHeights = characters.map(character => {
    // let namesAndHeights = {
    //     name: character.name,
    //     height: character.height
    // };

    // return namesAndHeights;
    return { name: character.name, height: character.height };
});
console.log(charactersNamesAndHeights);
console.log();

// getting all array first names
const charactersFirstNames = characters.map(character => {
    let firstName = '';
    for (letter of character.name) {
        if (letter === ' ') {
            return firstName;
        } else {
            firstName += letter;
        }
    }
});
console.log(charactersFirstNames);
console.log();

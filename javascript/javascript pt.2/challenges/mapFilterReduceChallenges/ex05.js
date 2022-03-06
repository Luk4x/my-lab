console.log();

const characters = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g']
];

// counting characters
const countCharacters = characters.flat().reduce((counter, character) => {
    if (counter[character]) {
        counter[character] += 1;
    } else {
        counter[character] = 1;
    }
    return counter;
}, {});
console.log(countCharacters);
console.log();

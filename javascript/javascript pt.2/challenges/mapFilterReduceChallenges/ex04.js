// fatorial
console.log();

const prompt = require('prompt-sync')();

const userNum = parseInt(prompt('Enter a number: '));
console.log();

// creating and felling an array based on userNum
const userNumArray = [];
for (i = 0; i < userNum; i++) {
    userNumArray.push(userNum - i);
}
console.log(`array created: ${userNumArray}.`);
console.log();

// calculating fatorial based on array
const fatorial = userNumArray.reduce((fatorial, number) => {
    fatorial *= number;
    return fatorial;
});
console.log(`fatorial de ${userNum} = ${fatorial}.`);
console.log();

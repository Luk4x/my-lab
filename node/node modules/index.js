const prompt = require('prompt-sync')();
const { mult, div } = require('./multDiv');
const sumSub = require('./sumSub');

const n1 = parseInt(prompt('Enter a number: '));
const n2 = parseInt(prompt('Enter another number: '));

console.log(`Numbers: ${n1}, ${n2}`);

console.log(`Sum: ${sumSub.sum(n1, n2)}`);
console.log(`Sub: ${sumSub.sub(n1, n2)}`);
console.log(`Mult: ${mult(n1, n2)}`);
console.log(`Div: ${div(n1, n2)}`);

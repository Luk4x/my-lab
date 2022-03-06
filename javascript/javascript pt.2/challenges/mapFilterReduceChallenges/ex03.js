console.log();

const numbers = [1, 5, 32, 84, -19, -6, -40, 9, 8, 22, 46, 75, -1, 5, 74 - 1, -7, -4, -3, 21, 0, 13, 16, 45, 52];

// getting only even numbers function
const isEven = function (number) {
    return number % 2 === 0;
};

// multiply all by 2 function
const multiplyBy2 = number => number * 2;

// return sum function
const sum = (total, number) => total + number;

// getting only even numbers, multiply all by 2, and returning the sum
const sumAllEvenMultiplyBy2Numbers = numbers.filter(isEven).map(multiplyBy2).reduce(sum, 0);
console.log(sumAllEvenMultiplyBy2Numbers);
console.log();

// getting only positive numbers function
function isPositive(number) {
    return number > 0;
}

// getting only positive numbers and returning the sum
const sumAllPositiveNumbers = numbers.filter(isPositive).reduce(sum, 0);
console.log(sumAllPositiveNumbers);
console.log();

// getting average function
const averageOf = function (average, number, index, array) {
    return array.reduce(sum, 0) / array.length;
};

// getting average of all even numbers
const averageEvenNumbers = numbers.filter(isEven).reduce(averageOf, 0);
console.log(averageEvenNumbers.toFixed(2));
console.log();

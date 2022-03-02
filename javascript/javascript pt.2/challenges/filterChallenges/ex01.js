console.log();

const numbers = [20, -3, 234, 12, -17, 541, 6, -87, 275, 1000, 50, -9, -3, 234, 6, 18, 20, 30];
console.log(numbers);
console.log();

// removing duplicated numbers
const newNumbers = numbers.filter((number, index, array) => array.indexOf(number) === index);
console.log(newNumbers);
console.log();

// getting only the numbers that are even and divisible by 5
const divisibleBy5 = function (number) {
    if (number % 5 === 0) {
        return true;
    } else {
        return false;
    }
};

const evenNumber = number => number % 2 === 0;

const evenDivisibleBy5Numbers = newNumbers.filter(evenNumber).filter(divisibleBy5);
console.log(evenDivisibleBy5Numbers);
console.log();

// getting only positive numbers
const positiveNumbers = newNumbers.filter(number => number > 0);
console.log(positiveNumbers);

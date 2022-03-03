console.log();

const list = [1, 5, 7, 9, 3, 7, 2, 11];

const sumList = list.reduce((acc, number) => {
    acc += number;
    return acc;
}, 0);
console.log(sumList);


/*
    const sum = (n1, n2) => {
        return n1 + n2;
    };

    console.log(sum(1,1))
    console.log(sum(1,2))
    console.log(sum(1,3))
    console.log(sum(1,4))
    console.log(sum(1,5))
    console.log(sum(1,6))

    console.log();

    console.log(sum(2,1))
    console.log(sum(2,2))
    console.log(sum(2,3))
    console.log(sum(2,4))
    console.log(sum(2,5))
    console.log(sum(2,6))
*/

function sum(n1) {
    return function (n2) {
        return n1 + n2;
    };
}

const sum1 = sum(1);
console.log(sum1(1));
console.log(sum1(2));
console.log(sum1(3));
console.log(sum1(4));
console.log(sum1(5));
console.log(sum1(6));

console.log();

const sum2 = sum(2);
console.log(sum2(1));
console.log(sum2(2));
console.log(sum2(3));
console.log(sum2(4));
console.log(sum2(5));
console.log(sum2(6));

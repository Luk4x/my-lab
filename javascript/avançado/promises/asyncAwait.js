/*
    const url = 'https://jsonplaceholder.typicode.com/users';

    const getUsers = () => {
        // fetch(url).then(usersData => {
        //     console.log(usersData);
        // });

        const usersData = fetch(url);
        console.log(usersData);
    };

    getUsers();
*/

/*
    const sayHi = () => {
        return 'hi';
    };
    console.log(sayHi());

    console.log(); // --------------------------------------------

    const aSayHi = async () => {
        return 'hi';
    };
    console.log(aSayHi());
    aSayHi().then(sayHiReturn => console.log(sayHiReturn));
*/

// const sum = (n1, n2) => {
//     if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//         throw 'Enter only numbers';
//     }

//     return n1 + n2;
// };
// console.log(sum(1, 'a'));

const aSum = async (n1, n2) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw 'Enter only numbers';
    }

    return n1 + n2;
};
console.log(aSum(1, 'a'));
aSum(1, 'a')
    .then(aSumResolveReturn => console.log(aSumResolveReturn))
    .catch(aSumRejectReturn => console.log('ErrOr:', aSumRejectReturn));

// creating a promise
const myPromise = new Promise((resolve, reject) => {
    const pNum = 12;
    if (pNum == 11) resolve(pNum);
    else reject(pNum);
});

// consuming my owm promise
myPromise
    .then(pValue => {
        console.log(`${pValue} is right.`);
        return pValue - 1;
    })
    .then(tValue => {
        console.log(`but ${tValue} is better.`);
    })
    .catch(pValue => {
        console.log(`${pValue} is wrong.`);
    })
    .finally(() => {
        console.log('end.');
    });

// consuming a external promise (a API that return a promise)

/*
const myPromise = new Promise((resolve, reject) => {
    const name = 'Luk4x';

    if (name === 'Luk4x') resolve('Right name.');
    else reject('Wrong name.');
});

myPromise
    .then(promiseReturn => {
        // resolve return
        console.log(promiseReturn);
        return promiseReturn.toLowerCase();
    })
    .then(thenReturn => {
        // promise, then return
        console.log(thenReturn);
    })
    .catch(promiseReturn => {
        // reject return
        console.log(promiseReturn);
    });
*/

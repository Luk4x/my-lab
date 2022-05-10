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

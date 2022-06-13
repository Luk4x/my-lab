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

const $dogImage = document.getElementById('dog-image');

const validateHTTPStatus = dogData => {
    if (!dogData.ok) {
        throw new Error(`HTTP error, status ${dogData.status}`);
    }

    console.log(dogData); // response object
    return dogData;
};

const jsonConversion = dogData => {
    const dogDataJson = dogData.json();
    console.log(dogDataJson);
    return dogDataJson;
};

const htmlImageInjection = ({ message: url }) => {
    console.log(url);
    $dogImage.setAttribute('src', url);
};

const handleRequestError = err => {
    console.error(`ErrOr: ${err.message}`);
};

// consuming a external promise (a API that return a promise)
const api = fetch('https://dog.ceo/api/breeds/image/random')
    .then(validateHTTPStatus)
    .then(jsonConversion)
    .then(htmlImageInjection)
    .catch(handleRequestError);

console.log(api);

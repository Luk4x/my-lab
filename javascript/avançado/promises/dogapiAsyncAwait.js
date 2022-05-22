const $dogImg = document.querySelector('#dog-image');

const validateHTTPStatus = apiData => {
    if (apiData.status != 'success') {
        throw new Error(`\nHTTP Status Code: ${apiData.code}\nMessage: ${apiData.message}`);
    }
};

const htmlImageInjection = ({ message: url }) => {
    $dogImg.setAttribute('src', url);
};

const handleError = message => {
    console.error('ErrOr:', message);
};

const getData = async () => {
    try {
        const apiData = await fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json());
        console.log(apiData);

        validateHTTPStatus(apiData);
        htmlImageInjection(apiData);
    } catch (err) {
        handleError(err.message);
    }
};
getData();

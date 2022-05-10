import fetch from 'node-fetch';
/*
    const first = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('2');
                resolve();
            }, 1000);
        });
    };

    const second = async () => {
        console.log('1');

        await first();

        console.log('3');
    };

    second();
*/

const getUser = id => {
    return fetch(`https://reqres.in/api/users?id=${id}`).then(res => res.json());
};

const showUserName = async id => {
    try {
        const user = await getUser(id);
        console.log('\n', user.data.first_name);
    } catch (err) {
        console.error(err);
    }
};
showUserName(3);

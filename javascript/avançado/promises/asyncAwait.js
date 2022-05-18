const url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => {
    // fetch(url).then(usersData => {
    //     console.log(usersData);
    // });

    const usersData = fetch(url);
    console.log(usersData);
};

getUsers();

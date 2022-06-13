import fetch from 'node-fetch';

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

/*
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
*/

/*
    const url = 'https://jsonplaceholder.typicode.com/users';

    const getUsers = async () => {
        try {
            const usersData = await fetch(url);
            console.log(usersData);
        } catch (err) {
            console.log('ErrOr: ', err);
        }

        // const usersData = await fetch(url);
        // return usersData;
    };
    getUsers(); // .then(res => console.log(res)).catch(err => console.log('ErrOr: ', err));
*/

// const get3Pokemons = async (n1, n2, n3) => {
//     const pokemon1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${n1}`).then(res => res.json());
//     const pokemon2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${n2}`).then(res => res.json());
//     const pokemon3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${n3}`).then(res => res.json());

//     console.log(pokemon1.name);
//     console.log(pokemon2.name);
//     console.log(pokemon3.name);
// };
// get3Pokemons(2, 5, 9);

const getPokemon = pokemonNum => `https://pokeapi.co/api/v2/pokemon/${pokemonNum}`;

const get3Pokemon = async (n1, n2, n3) => {
    const pokemonPromise1 = fetch(getPokemon(n1)).then(res => res.json());
    const pokemonPromise2 = fetch(getPokemon(n2)).then(res => res.json());
    const pokemonPromise3 = fetch(getPokemon(n3)).then(res => res.json());

    const pokemons = await Promise.all([pokemonPromise1, pokemonPromise2, pokemonPromise3]);

    pokemons.map(pokemon => console.log(pokemon.name));
};
get3Pokemon(2, 5, 9);

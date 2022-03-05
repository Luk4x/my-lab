console.log();

const cart = [
    { name: 'Dark Souls III', price: 95.03 },
    { name: 'Shadow of The Tomb Raider', price: 101.19 },
    { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
    { name: 'Resident Evil 2', price: 119.9 },
    { name: 'Death Standing', price: 149.99 }
];

// getting products name list                                 -> shortcut to: let name = product.name; (object destruct)
const cartProductsNameList = cart.reduce((productsNameList, { name }) => `${productsNameList}- ${name}\n`, '');
console.log(cartProductsNameList);
console.log();

// getting total cart value
const cartTotalValue = cart.reduce((total, { price }) => total + price, 0);
console.log(cartTotalValue);
console.log();

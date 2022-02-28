console.log();

// creating array
const shoppingList = ['apple', 'banana', 'guava', 'pineapple', 'green tea', 'rice', 'yogurt', 'ice cream', 'chocolate', 'pudding'];
console.log(shoppingList);
console.log();

// using slice to categorically split array
const shoppingFruitsList = shoppingList.slice(0, 4);
const shoppingCandiesList = shoppingList.slice(6);
console.log(shoppingList);
console.log(shoppingFruitsList);
console.log(shoppingCandiesList);
console.log();

// using splice to delete
shoppingList.splice(0, 4); // deleting fruits
shoppingList.splice(2); // deleting candies
console.log(shoppingList);
console.log();

// using splice to add an item in the array
shoppingList.splice(2, 0, 'black tea');
console.log(shoppingList);
console.log();

// using shift and pop to respectively delete the first and last item in the array
shoppingList.shift();
shoppingList.pop();
console.log(shoppingList);
console.log();

// using splice to rename a item in the array
shoppingList.splice(0, 1, 'none');
console.log(shoppingList);
console.log();

// using splice to delete one item in the array
shoppingList.splice(0, 1);
console.log(shoppingList);
console.log();

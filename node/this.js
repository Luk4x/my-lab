global.console.log(this === module.exports); // in global scope, so above: this === module.exports

function name() {
    console.log(this); // in local scope, so above: this === global
}

const luk4x = {// local scope1
    name: 'Lucas',
    age: 18,
    talk: function () {
        console.log(`yo, i'm ${this.name}.`); // in local scope2, so above: this === luk4x (local scope1).
    }
};

luk4x.talk();

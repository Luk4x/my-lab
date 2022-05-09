/*
    const person0 = {
        name: 'Akame',
        age: 16,
        talk: function () {
            console.log(`Konnichiwa, ${this.name} desu.`);
        }
    };

    const person1 = {
        name: 'Sheele',
        age: 20,
        talk: function () {
            console.log(`Konnichiwa, ${this.name} desu.`);
        }
    };

    const person2 = {
        name: 'Leone',
        age: 20,
        talk: function () {
            console.log(`Konnichiwa, ${this.name} desu.`);
        }
    };

    console.log(person0);
    person0.talk();
*/

/*
    class Person {
        name;
        age;
        talk() {
            console.log(`Konnichiwa, ${this.name} desu.`);
        }
    }

    const newPerson0 = new Person();
    console.log(newPerson0);
    newPerson0.name = 'Akame';
    newPerson0.age = 16;

    const newPerson1 = new Person();
    newPerson1.name = 'Sheele';
    newPerson1.age = 20;

    const newPerson2 = new Person();
    newPerson2.name = 'Leone';
    newPerson2.age = 20;

    console.log(newPerson0);
    console.log(newPerson0.talk());
*/

class Person {
    constructor(name, age) {
        console.log(`- Constructing ${name}...`);

        // storing the data so it can be accessed anywhere in the class.

        // calling set name method
        this.name = name;

        // calling set age method
        this.age = age;
    }

    set name(name) {
        const newName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`; // capitalizing name
        this._name = newName;
    }

    set age(age) {
        // example of age validation
        if (typeof age === 'number' && age >= 0 && age < 130) this._age = age;
        else console.log(`${this.name} has invalid age.`);
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    talk() {
        console.log(`Konnichiwa, ${this._name} desu. ${this._age}-Sai desu.`);
    }
}

const newPerson0 = new Person('akame', 16);
console.log(newPerson0);
console.log(newPerson0.name); // calling get name method
console.log(newPerson0.age); // calling get age method
newPerson0.talk();
console.log();

const newPerson1 = new Person('Sheele', '20');
console.log(newPerson1);

// calling set age method
newPerson1.age = -1;
newPerson1.age = 20;

console.log(newPerson1);
console.log();

const newPerson2 = new Person('leone', 20);
console.log(newPerson2);
newPerson2.name = 'leone-swan'; // calling set name method
console.log(newPerson2);

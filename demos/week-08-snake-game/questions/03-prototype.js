// prototype for john is Object.prototype
const john = {
    name: 'John',
    age: 32
};

const jane = {
    name: 'Jane',
    age: 28
};

console.log(john.__proto__); // prototype for john

const person = {
    celebrateBirthday() {
        ++this.age;
    }
}

// john and jane share the prototype
john.__proto__ = person;
jane.__proto__ = person;

// an object can use any methods on its prototype
john.celebrateBirthday();
jane.celebrateBirthday();

console.log(john);
console.log(jane);
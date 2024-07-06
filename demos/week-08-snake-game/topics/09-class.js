class Person {
    // name;
    // age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        ++this.age;

        return this.age;
    }
}

const john = new Person('John', 32);
console.log(john);
const jane = new Person('Jane', 28);
console.log(jane);

john.celebrateBirthday();
console.log(john);
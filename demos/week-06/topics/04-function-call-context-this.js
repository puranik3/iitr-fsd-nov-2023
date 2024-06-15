// function xyz() {
//     console.log( this );
// }

// "this" -> function context
const john = {
    name: 'John',
    age: 32,
    celebrateBirthday: function () {
        this.age++;
    }
};

john.celebrateBirthday();

console.log(john);

const jane = {
    name: 'Jane',
    age: 28
};

// method borrowing
// fn.call() will call fn, but with a different context
john.celebrateBirthday.call(jane);

console.log(jane);
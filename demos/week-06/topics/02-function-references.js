// Function are "first-class citizens" - you can do work with functions, like you work with objects

// function references

let john = {
    name: 'John',
    age: 32
};

let jonathan = john;

function add(x, y) {
    return x + y;
}

const sum = add; // add and sum now refer to the same function in memory

console.log(add(12, 13));
console.log(sum(12, 13));
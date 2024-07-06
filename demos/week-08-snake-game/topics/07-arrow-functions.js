// old syntax
function sum1(x, y) {
    return x + y;
}

// old syntax
const sum2 = function (x, y) {
    return x + y;
};

console.log(sum1(12, 13));
console.log(sum2(12, 13));

// es2015 - arrow function syntax
const sum3 = (x, y) => {
    return x + y;
};

// function with single line return statement
const sum4 = (x, y) => x + y;

console.log(sum4(12, 13));

// const square = (x) => x * x;
const square = x => x * x;
console.log(square(12));

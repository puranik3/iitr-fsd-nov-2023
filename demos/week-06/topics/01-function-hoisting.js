console.log(sum(12, 13)); // still works (hoisting)

// function declaration - function is created before execution starts - the function is "hoisted"
function sum(x, y) {
    let result = x + y;
    return result;
}

// console.log(add(12, 13)); // will throw an error

// function expression - function is created when this code executes (just-in-time) -  not "hoisted"
const add = function (x, y) {
    let result = x + y;
    return result;
};

console.log(add(12, 13));
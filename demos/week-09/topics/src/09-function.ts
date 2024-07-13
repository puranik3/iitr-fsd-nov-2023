// return type is inferred - if you want you can give it explicitly
function sum1(x: number, y: number) /* : number */ {
    return x + y;
}

// Another way to give type for function expression - old syntax / arrow function syntax
// const sum2 = (x: number, y: number) => x + y;

// const sum2 : ____________________ = (x, y) => x + y;
// const sum2 : (a : number, b : number ) => number = (x, y) => x + y;

type BinaryFunction = (a: number, b: number) => number;
const sum2: BinaryFunction = (x, y) => x + y;

const multiply: BinaryFunction = function (x, y) {
    return x * y;
};

export {};

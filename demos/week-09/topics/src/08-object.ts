type Person = {
    name: string;
    readonly age: number;
    spouse?: string; // optional property
};

let john: Person;

john = {
    name: "John",
    // age: "Thirty two", // error
    age: 32,
    spouse: "Jane",
};

const jane: Person = {
    name: "Jane",
    age: 28,
};

// jane = {
//     name: 'Janette',
//     age: 29
// }

jane.name = "Janette"; // allowed for const object
// jane.age = 29; // readonly property cannot be assigned // error
jane.spouse = "John";

export {};

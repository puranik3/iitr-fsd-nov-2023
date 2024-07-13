import { IPerson } from "./10-interface";

class Person implements IPerson {
    readonly name: string;
    age: number;
    spouse?: string;
    private children: string[] = [];

    constructor(
        name: string,
        age: number,
        spouse?: string,
        children?: string[]
    ) {
        console.log(arguments.length);

        this.name = name;
        this.age = age;

        if (spouse) {
            this.spouse = spouse;
        }

        if (children) {
            this.children = children;
        }
    }

    celebrateBirthday(x: number) {
        ++this.age;
        console.log(this.children); // ok -> children accesed within a method of the class
    }
}

const john = new Person("John", 32, "Jane", ["Jack", "Jill"]);
const jane = new Person("John", 32, "Jane");
const mark = new Person("John", 40);

// john.children; // error -> children is a private property

export {};

import { IPerson } from "./10-interface";

class Person implements IPerson {
    readonly name: string;
    age: number;
    spouse?: string;
    private children: string[] = [];

    constructor(name: string, age: number, spouse: string, children: string[]) {
        this.name = name;
        this.age = age;
        this.spouse = spouse;
        this.children = children;
    }

    celebrateBirthday(x: number) {
        ++this.age;
        console.log(this.children); // ok -> children accesed within a method of the class
    }
}

const john = new Person("John", 32, "Jane", ["Jack", "Jill"]);

// john.children; // error -> children is a private property

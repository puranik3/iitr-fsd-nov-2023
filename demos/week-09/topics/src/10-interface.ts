// interfaces in TS can be used to give data type for an object or implement it in a class
interface IPerson {
    readonly name: string;
    age: number;
    spouse?: string;
    celebrateBirthday: (x: number) => void; // we use void to indicate that we don't care about the returned value type
}

const john: IPerson = {
    name: "John",
    age: 32,
    celebrateBirthday(x: number) {
        this.age += x;
    },
};

john.spouse = "Jane";

// john.name = "Jonathan"; // error

// one interface can "extend" another interface

export { IPerson };

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        ++this.age;

        return this.age;
    }
}

class Employee extends Person {
    // role;
    // dept;

    constructor(name, age, role, dept) {
        super(name, age);

        this.role = role;
        this.dept = dept;
        this.voucherAmount = 0;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        this.voucherAmount = 2000;
    }
}

const john = new Employee('John', 32, 'Accountant', 'Finance');
john.promote();
john.celebrateBirthday();
console.log(john);
function f(person, someFunction) {
    console.log(person.name);
    someFunction();
}

const john = {
    name: 'John',
    age: 32,
    gender: 'male'
};

function g() {
    console.log('i am g');
}

f(john, g); // person = john, someFunction = g

console.clear();

function printPerson(person, getTitle) {
    const title = getTitle(person);
    console.log(`Hello ${title} ${person.name}. Your age is ${person.age}`);
}

function getEnglishTitle(person) {
    const title = person.gender === 'female' ? 'Ms.' : 'Mr.';
    return title;
}

printPerson(john, getEnglishTitle);

function getFrenchTitle(person) {
    const title = person.gender === 'female' ? 'Madame' : 'Monsieur';
    return title;
}

printPerson(john, getFrenchTitle); // person = john, getTitle = getFrenchTitle

printPerson(
    {
        name: 'Jane',
        age: 28,
        gender: 'female'
    },
    function (person) { // anonymous function (name of the function is not required)
        return person.gender === 'female' ? 'Srimati' : 'Sri'
    }
);
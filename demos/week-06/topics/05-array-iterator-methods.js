// iterator methods
// they iterate through the items of the array
// they have similar set of arguments
// forEach, filter, find, map

const persons = [
    { name: 'John', age: 32, city: 'Bangalore' },
    { name: 'Jane', age: 28, city: 'Bangalore' },
    { name: 'Mark', age: 40, city: 'Hyderabad' },
    { name: 'Mary', age: 44, city: 'Hyderabad' },
    { name: 'David', age: 60, city: 'Delhi' }
];

// [ 'John', 'Jane', .... ] -> map

// forEach -> do something on every item
// like a for each
persons.forEach( // f(item, idx)
    function (person) {
        // console.log(person, idx);
        person.age++;
    }
);

console.log(persons);

// filter -> to get a subset of the array items
const bangaloreans = persons.filter(
    function (person) {
        return person.city === 'Bangalore';
    }
);

console.log(bangaloreans);

// find gives the first matching item in the array
const firstBangalorean = persons.find(
    function (person) {
        return person.city === 'Bangalore';
    }
);

console.log('first match = ', firstBangalorean);

const personNames = persons.map(
    function (person) {
        return person.name;
    }
);
console.log('personNames = ', personNames);

const bangaloreansAndHyderabadis = persons.filter(
    function (person) {
        return person.city === 'Bangalore' || person.city === 'Hyderabad';
    }
);

console.log(bangaloreansAndHyderabadis);

// function f(x, y) {
//     console.log(x, y);
// }

// f(12, 13);
// f(12); // does not throw an error. y -> undefined
// f(12, 13, 14); // no error

// function forEach(array, iter) {
//     for (let i = 0; i < array.lengh; ++i) {
//         iter(array[i], i);
//     }
// }

// forEach(
//     persons,
//     function (person) {
//         // console.log(person, idx);
//         person.age++;
//     }
// );
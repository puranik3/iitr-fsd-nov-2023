const john = {
    name: 'John',
    age: 32
};

const johnCopy = {};

for (let key in john) {
    console.log('key = ', key);
    console.log('value = ', john[key]);

    // copy over the key-value pair into johnCopy
    johnCopy[key] = john[key];
}

console.log(johnCopy);
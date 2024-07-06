const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// const mon = days[0], tue = days[1], wed = days[2];
const [mon, tue, wed] = days;
console.log(mon, tue, wed);

const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Bengaluru',
        state: 'Karnataka'
    },
    emails: [
        'john@gmail.com',
        'john@example.com'
    ]
};

// const name = john.name, age = john.age, city = john.address.city, state = john.address.state;
const {
    age,
    name,
    address: {
        city,
        state
    },
    emails: [
        primaryEmail
    ]
} = john;
console.log(age, name, city, state, primaryEmail);
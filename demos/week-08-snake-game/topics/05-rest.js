const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];
const [mon, tue, wed, ...restOfDays] = days;
console.log(restOfDays);

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

const {
    name,
    age,
    ...remainingDetails
} = john;
console.log(remainingDetails);
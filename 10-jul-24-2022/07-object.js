// We want to store an employee's info
// name (string), age (number), role (string), dept (string), emails (array with strings as items)

// An object is a collection of key-value pairs
// keys are strings (understood - no need to quote it)
// values can be of any data type
// key1: value1, key2: value2, ...
const john = {
    'name': 'John',
    age: 32,
    role: 'Accountant',
    dept: 'Finance',
    emailAddresses: [
        'john@example.com',
        'john@gmail.com'
    ],
    address: {
        line: '#32 Rosewell',
        city: 'New York',
        state: 'NY State'
    }
};

// john = { // error (const)
//     name: 'Jonathan'
// };

console.log( john.name );
console.log( john.dept );
console.log( john.emailAddresses[1] ); // second email
console.log( john.address.city ); // john's city
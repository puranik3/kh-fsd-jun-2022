// We want to store an employee's info
// name (string), age (number), role (string), dept (string), emails (array with strings as items)

// An object is a collection of key-value pairs
// keys are strings (understood - no need to quote it)
// keys are also called "properties"
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

// adding / editing properties is done the exact same way
john.name = 'Jonathan';
john.emailAddresses.push( 'john@yahoo.com' );
john.address.line = '#64 Rosewell';
john.favoriteColor = 'Blue';
john.spouse = {
    name: 'Jane',
    age: 28
};

console.log( john );
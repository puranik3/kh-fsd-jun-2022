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
    },
    // RHS is a function expression
    // "method" -> a property whose value is a function (addEmail is a method)
    addEmail: function( newEmail ) {
        // this -> refers to the object to which the method belongs
        this.emailAddresses.push( newEmail );
    },
    // EXERCISE: Create these 2 methods, and call them later
    // celebrateBirthday() is a method which increases age by 1
    // changeAddress() which accepts line, city and state as inputs, and updates the object
};

john.addEmail( 'john@yahoo.com' );

console.log( john );
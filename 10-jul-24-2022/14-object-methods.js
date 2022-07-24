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
        // this -> refers to the object of which
        this.emailAddresses.push( newEmail );
    }
};

john.addEmail( 'john@yahoo.com' );

console.log( john );
const persons = [ 
    { 
        name: 'John', 
        salary: 1000, 
        age: 32, 
        emails: [ 
            'john@gmail.com', 
            'john@example.com' 
        ] 
    },
    { 
        name: 'Jane', 
        age: 28, 
        salary: 2000, 
        emails: [ 
            'jane@gmail.com', 
            'jane@example.com', 
            'jane@yahoo.com', 
        ] 
    }, 
    { 
        name: 'Mark', 
        age: 46, 
        salary: 3000, 
        emails: [ 
            'mark@gmail.com', 
            'mark@example.com' 
        ] 
    }, 
    { 
        name: 'Mary', 
        age: 44, 
        salary: 4000, 
        emails: [ 
            'mary@gmail.com', 
            'mary@example.com' 
        ] 
    } 
]; 

// What we want: [ 'John', 'Jane', 'Mark', 'Mary' ]

const personNames = persons.map(
    function( person ) {
        return person.name;
    }
);

console.log( personNames );

// EXERCISE: We wnt an array with the 2nd email id of every person
// [ 'john@example.com', 'jane@example.com', ... ]
const personSecondaryEmails = persons.map(
    function( person ) {
        return person.emails[1];
    }
);

console.log( personSecondaryEmails );

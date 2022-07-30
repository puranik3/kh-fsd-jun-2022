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

console.log( persons[1] );
console.log( persons[1].name );
console.log( persons[1].emails[1] );
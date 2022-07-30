// Given the following array, solve the questions that follow using appropriate array iterator methods (forEach, find, filter, map, reduce, some)

// forEach, find, filter, map, reduce are array methods that accept a function as an argument

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
 
// • Find all persons whose are 35 years or older 
function getOver35( person ) {
    return person.age >= 35;
}

console.log( persons.filter( getOver35 ) );

// • Find persons who have at least 3 email ids 
function has3EmailIds( person, idx ) {
    console.log( 'idx = ', idx );
    return person.emails.length >= 3;
}

console.log( persons.filter( has3EmailIds ) );

// increase salary of every person by 10%
persons.forEach(function increaseSalary( person ) {
    person.salary = person.salary + 0.1 * person.salary;
});

console.log( persons );

// • Find the sum of salaries for all persons 
// • Get a list of users along with their first email id. The result should be an array like this. 
// Do not modify the given array. 
 
// [ 
// { 
 
// www.digdeeper.in © Prashanth Puranik puranik@digdeeper.in 
//         name: 'John', 
//         email: 'john@gmail.com' 
// }, 
// { 
//         name: 'Jane', 
//         email: 'jane@gmail.com' 
// }, 
// { 
//         name: 'Mark', 
//      email: 'mark@gmail.com' 
//     }, 
//     { 
//         name: 'Mary', 
//         email: 'mary@gmail.com' 
//     } 
// ]; 
 
// • Find a person who has a yahoo.com email id (Hint: you can use the some array iterator 
// method along with string / regular expression methods to test an email)
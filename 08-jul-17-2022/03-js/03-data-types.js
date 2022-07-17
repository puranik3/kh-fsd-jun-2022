// 3 primitive data types - number, boolean, string;
let numItems = 17; // number
let PI = 3.14; // we use all caps for variable names when the value is expected not to change

console.log( numItems, PI );

// typeof variable -> gives the data type as a string - eg. "number"
console.log( typeof numItems ); // "number"
console.log( typeof 100 ); // "number"
console.log( typeof "John Doe" ); // "string"


// console.log( typeof "number" ); -> "string"
console.log( typeof typeof 100 ); // "string"

console.log( typeof true ); // "boolean"
console.log( typeof false ); // "boolean"

console.clear();

// backtick quotes - `` -> can span multiple lines
let city = "New York", state = 'New York State', country = `USA
-
The United States of America`;
console.log( city );
console.log( state );
console.log( country );

console.log( city, '\n', state, '\n', country );

let isUserLoggedIn = true, isEditing = false;
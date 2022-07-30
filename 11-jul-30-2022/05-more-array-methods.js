let numbers = [ 1, 2, 99, 100 ];

// unshift() -> add an item at the start of the array

let popped = numbers.pop();
console.log( popped ); // 100
console.log( numbers ); // [ 1, 2, 99 ]

// splice() - use it to remove 3, 4, 97, 98
numbers = [ 1, 2, 3, 4, 97, 98, 99, 100 ];
numbers.splice( 2, 4 );

console.log( numbers ); // [ 1, 2, 99, 100 ];

// index to start at 4
// remove 0 items
// add 5, 6, 95, 96
numbers = [ 1, 2, 3, 4, 97, 98, 99, 100 ];
numbers.splice( 4, 0, 5, 6, 95, 96 );

console.log( numbers ); // [ 1, 2, 3, 4, 5, 6, 95, 96, 97, 98, 99, 100 ]
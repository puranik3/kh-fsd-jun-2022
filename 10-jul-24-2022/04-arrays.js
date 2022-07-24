// arrays are non-primitives
// a list of values of any data type
const numbers = [ false, true, 2, 3, 'Four' ];
console.log( numbers );
console.log( numbers.length ); // number of items -> 5

console.log( numbers[0] );
console.log( numbers[4] );
console.log( numbers[numbers.length - 1] ); // last item

let n = numbers.length - 1; // last item's index
console.log( numbers[n] ); // last item

console.log( numbers[n + 1] ); // undefined

++numbers[2];
numbers[3] = numbers[3] * 2; // 3 * 2 = 6

console.log( numbers );

// numbers = 'Hello world'; // error
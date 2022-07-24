// arrays are non-primitives
// a list of values of any data type
const numbers = [ false, true, 2, 3, 'Four' ];
console.log( numbers );
console.log( numbers.length ); // number of items -> 5

console.log( numbers[0] );
console.log( numbers[4] );
console.log( numbers[numbers.length - 1] ); // last item

let n = numbers.length - 1;
console.log( numbers[n] );
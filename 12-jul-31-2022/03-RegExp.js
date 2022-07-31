// const phonePattern = new RegExp( '\\d' )
// const phonePattern = /[0-9]/;
const phonePattern1 = /\d{3}-\d{7}/;
const phonePattern2 = /^\d{3}-\d{7}$/;

console.log( phonePattern1.test( '123-4567890' ) ); // true
console.log( phonePattern1.test( '123-45678901' ) ); // true! (the entire string is not matched)

console.log( phonePattern2.test( '123-4567890' ) ); // true
console.log( phonePattern2.test( '123-45678901' ) ); // false

// console.clear();

const emailPattern = /^[A-Za-z0-9_\.]+@(example|gmail|yahoo)\.[A-Za-z]{2,3}$/;

console.log( emailPattern.test( 'john.doe@example.com' ) ); // true
console.log( emailPattern.test( 'john.doe2@example.com' ) ); // true
console.log( emailPattern.test( 'john.doe@outlook.com' ) ); // false (outlook not allowed)
console.log( emailPattern.test( 'john%doe@gmail.com' ) ); // false (% not allowed)
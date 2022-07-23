// arithmetic operators
// +, -, *, /, % (remainder), ** (exponenatiation)
// 2 + 3 -> expression -> expression has a value
let result;
result = 2 + 3; // statement (a line of code)

console.log( result );

let x = 12, y = 13;
console.log( x + y );
console.log( x + 14 );
console.log( x - y );
console.log( x * y );
console.log( x / y );
console.log( 20 % y ); // 7
console.log( 3 ** 2 ); // 9

// e = mc^2
const m = 2, c = 2.99e8;
const e = m * c ** 2;
console.log( e );

// Declare variables, calculate interest, and print out the result
// interest = Principal * ratePerYear * numYears / 100;
const principal = 1000, rate = 5, numYears = 10;
const interest = principal * rate * numYears / 100;
console.log( interest );

console.clear();

// PEMDAS, BODMAS
// 1 + 2 * 3
// 1 + 6
// 7
result = 1 + 2 * 3;
console.log( result );

// ( 1 + 2 ) * 3
// 3 * 3
// 9
result = ( 1 + 2 ) * 3;
console.log( result );

// calculate the compound interest/amount for the same principal, rate and number of years as above
let amount = principal * ( 1 + rate / 100 ) ** numYears;
console.log( amount );

console.log( amount.toFixed( 2 ) ); // round off to 2 decimal places
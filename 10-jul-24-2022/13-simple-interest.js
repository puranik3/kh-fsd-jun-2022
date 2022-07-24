const calculateInterest1 = function( p, n, r ) {
    return p * n * r / 100;
};

console.log( calculateInterest1( 10000, 5, 3 ) );
console.log( calculateInterest1( 10000, 10, 7.5 ) );

const calculateInterest2 = ( p, n, r ) => {
    return p * n * r / 100;
};

console.log( calculateInterest2( 10000, 5, 3 ) );
console.log( calculateInterest2( 10000, 10, 7.5 ) );

// EXERCISE:
//  calculateInterest3() in "shortened" arrow function syntax (make sure you have just the expression to calculate the interest and return it). Call it a couple of times.
const calculateInterest3 = ( p, n, r ) => p * n * r / 100;

console.log( calculateInterest3( 10000, 5, 3 ) );
console.log( calculateInterest3( 10000, 10, 7.5 ) );
/**
 * EXERCISE:
 * 
 * calculateInterest1() in function expression syntax. Call it a couple of times.
 * 
 * calculateInterest2() in arrow function syntax. Call it a couple of times.
 */
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

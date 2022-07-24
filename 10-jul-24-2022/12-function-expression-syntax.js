// syntax #2: The right hand side of this statements is a "function expression"
const sum1 = function( x, y ) {
    return x + y;
};

console.log( sum1( 12, 13 ) );
console.log( sum1( 14, 15 ) );

// syntax #3 - arrow function
const sum2 = ( x, y ) => {
    return x + y;
};

console.log( sum2( 12, 13 ) );
console.log( sum2( 14, 15 ) );
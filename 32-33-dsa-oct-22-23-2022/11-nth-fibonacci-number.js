// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// We want to nth Fibonacci number

// fib( n ) = fib( n - 1 ) + fib( n - 2 );



const fib = ( n ) => {
    // base case
    if( n === 0 ) {
        return 0;
    }

    if( n === 1 ) {
        return 1;
    }

    return fib( n - 1 ) + fib( n - 2 );
}

console.log( fib( 50 ) );
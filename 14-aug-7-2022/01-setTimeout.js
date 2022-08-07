console.log( 1 );

// Hey browser/node! Please execute f after 3 seconds.
setTimeout(
    function() { // f
        console.log( 2 );
    },
    3 * 1000
);

console.log( 3 );

setTimeout(
    function() {
        console.log( 4 );
    },
    4 * 1000
);

console.log( 5 );
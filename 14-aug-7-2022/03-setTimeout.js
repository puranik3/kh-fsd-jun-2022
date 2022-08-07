console.log( 1 );

// Hey browser/node! Please execute f after 3 seconds.
setTimeout(
    function() { // f
        console.log( 2 );

        setTimeout(
            function() {
                console.log( 6 );
            },
            1 * 1000
        );
    },
    3 * 1000
);

console.log( 3 );

setTimeout(
    function() {
        console.log( 4 );
    },
    5 * 1000
);

console.log( 5 );
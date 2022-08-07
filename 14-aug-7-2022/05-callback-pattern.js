function sum( x, y, cb ) {
    setTimeout(
        // the environment calls this function after 3 seconds. it gets the returned value.
        function() {
            // return x + y; // returning is useless (Environment gets the returned value)
            cb( x + y ); // let's instead pass the result to the function passed to sum
        },
        3000
    );

    // return undefined;
}

sum(
    12,
    13,
    function( result ) {
        console.log( 'result = ', result );
    }
);
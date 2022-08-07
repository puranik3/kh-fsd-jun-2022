// A promise object can move to a resolved / rejected state
function sum( x, y ) {
    return new Promise(( resolve, reject ) => {
        setTimeout(
            function() {
                if( typeof x !== 'number' || typeof y !== 'number' ) {
                    reject( new Error( 'At least one argument was not a number' ) );
                    return;
                }

                resolve( x + y );
            },
            3000
        );
    });
}

sum( 12, 13 )
    .then(
        function( result ) {
            console.log( 'result = ', result );

            // if we return a promise, the function passed to the following "then" called, receives the resolved value
            // p rejects and control transfers to g
            return sum( result, 'hello' ); // p will reject
        }
    )
    .then(
        function( result2 ) { // f
            console.log( 'result2 = ', result2 );

            return sum( result2, 15 );
        }
    )
    .then(
        function( result3 ) {
            console.log( 'result3 = ', result3 );
        }
    )
    .catch(
        function( error )  { // g
            console.log( error.message );
        }
    );
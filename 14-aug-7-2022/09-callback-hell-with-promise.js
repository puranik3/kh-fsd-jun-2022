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

sum( 12, 13 ).then(
    function( result ) {
        console.log( 'result = ', result );

        sum( result, 14 ).then(
            function( result2 ) {
                console.log( 'result2 = ', result2 );
            }
        ).catch(
            function( error ) {
                console.log( error.message );
            }
        )
    }
).catch(
    function( error )  { // executes on rejection
        console.log( error.message );
    }
);
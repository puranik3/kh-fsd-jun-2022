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

sum( 12, 'hello' )
    .then(
        function( result ) { // executes on resolution
            console.log( 'result = ', result );
        }
    )
    .catch(
        function( error )  { // executes on rejection
            console.log( error.message );
        }
    );
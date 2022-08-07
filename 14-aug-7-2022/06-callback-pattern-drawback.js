function sum( x, y, cb ) {
    setTimeout(
        function() {
            cb( x + y );
        },
        3000
    );
}

// callback hell
sum( 12, 13, function( result ) {
    console.log( 'result = ', result );

    sum( result, 14, function( result2 ) {
        console.log( 'result2 = ', result2 );

        sum( result2, 15, function( result3 ) {
            console.log( 'result3 = ', result3 );
        });
    });
});
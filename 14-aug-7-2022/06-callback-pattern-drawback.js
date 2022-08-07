function sum( x, y, cb ) {
    setTimeout(
        function() {
            cb( x + y );
        },
        3000
    );
}

sum( 12, 13, function( result ) {
    console.log( 'result = ', result );
});
// Promise class (introduced in ES2015)
function sum( x, y ) {
    return new Promise(( resolve, reject ) => {
        console.log( 1 );

        setTimeout(
            function() {
                // Hey promise! Here is the result
                resolve( x + y ); // the result is conveyed to the promise object
            },
            3000
        );
    });
}

// Promise objects have 2 methods - then(), catch()
// console.log( sum( 12, 13 ) )
const promise = sum( 12, 13 );

console.log( 2 );

// Hey promise! When the result is available please call f
promise.then(
    function( result ) { // f
        console.log( 'result = ', result );
    }
);

console.log( 3 );
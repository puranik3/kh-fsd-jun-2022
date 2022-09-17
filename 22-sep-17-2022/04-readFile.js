const fs = require( 'fs' ); // fs -> filesystem module

// non-blocking (f executes AFTER the file is read. meanwhile Node proceeds to the line after fs.readFile() and executes it)
fs.readFile( './backend.md', 'utf-8', ( error, contents ) => { // f
    if( error ) {
        console.log( error.message );
    } else {
        console.log( contents );
    }
});

console.log( 'end of script' );
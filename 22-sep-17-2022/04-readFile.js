const fs = require( 'fs' ); // fs -> filesystem module

// non-blocking (f executes AFTER the file is read)
fs.readFile( './backend.md', ( error, contents ) => { // f
    console.log( 'file has been read' );

    if( error ) {
        console.log( error.message );
    } else {
        console.log( contents );
    }
});

console.log( 'end of script' );
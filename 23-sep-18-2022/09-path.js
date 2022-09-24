const fs = require( 'fs' );
const path = require( 'path' ); // to create absolute file paths etc. on any platform (Windows, Mac, Linux, ...)

console.log( __dirname ); // path to the parent folder of this very file (../../../23-sep-18-2022)
console.log( __filename ); // path to this very file (../../../23-sep-18-2022/09-path.js)

const filePath = path.join( __dirname, '../22-sep-17-2022/01-basic-server.js' );
console.log( filePath );

fs.readFile( filePath, 'utf-8', ( error, contents ) => { // f
    if( error ) {
        console.log( error.message );
    } else {
        console.log( contents );
    }
});
const fs = require( 'fs' );
/**
 * WARNING: Please DO NOT use this. It is a waste of the CPU's time.
 */

try {
    // blocking function - till the time the file is read, the next line of code DOES NOT execute. This is a waste of the CPU.
    const contents = fs.readFileSync( './backend.md', 'utf-8' );
    console.log( contents );
} catch( error ) {
    console.log( error.message );
}
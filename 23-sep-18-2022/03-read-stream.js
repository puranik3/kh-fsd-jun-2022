const fs = require( 'fs' );

// a "stream" is like a straw - it allows us to read a file's contents chunk-by-chunk.
// the file reading starts immediately
const rs = fs.createReadStream( './backend.md', 'utf-8' );

// 1 chunk = 64KB of data is read, a "data" event is fired
// Hey Node! Whenever you read 1 chunk, please execute g (g will be called once per chunk)
// rs.on() is SAME as rs.addListener()
rs.addListener( 'data', ( chunk ) => { // g
    console.log( '*** one more chunk ***' );
    // console.log( chunk ); // uncomment to view contents of the chunk
});

// Hey Node! When you reach the 'end' of reading the file, please execute f
rs.addListener( 'end', () => { // f
    console.log( 'file has been read' );
});
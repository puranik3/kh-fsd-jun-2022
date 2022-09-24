const fs = require( 'fs' );

const rs = fs.createReadStream( './hello-node.txt', 'utf-8' );
const ws = fs.createWriteStream( './hello-node-copy.txt', 'utf-8' );

rs.on( 'data', ( chunk ) => {
    ws.write( chunk );
});

// once the input file is read, we also end writing to the output file
rs.on( 'end', () => {
    ws.end();
});

// 'error' event is fired when file cannot be read
rs.on( 'error', ( error ) => {
    console.log( error.message );
});

// 'error' event is fired when file cannot be written to
ws.on( 'error', ( error ) => {
    console.log( error.message );
});
const fs = require( 'fs' );

const rs = fs.createReadStream( './hello-node.txt', 'utf-8' );
const ws = fs.createWriteStream( './hello-node-copy.txt', 'utf-8' );

// this starts of reading from the source file, and as a chunk is read, it gets written out to the destination file
rs.pipe( ws );
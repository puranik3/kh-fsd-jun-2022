const fs = require( 'fs' );

const ws = fs.createWriteStream( './hello-node.txt', 'utf-8' );

// You call ws.write() whenever you want to write out a bit of content
for( let i = 1; i <= 1000000; i++ ) {
    ws.write( i + ') Hello, Node\n' );
}

ws.end();
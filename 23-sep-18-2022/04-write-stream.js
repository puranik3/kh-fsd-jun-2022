const fs = require( 'fs' );

const ws = fs.createWriteStream( './hello-node.txt', 'utf-8' );

for( let i = 1; i <= 1000000; i++ ) {
    ws.write( i + ') Hello, Node\n' );
}

ws.end();
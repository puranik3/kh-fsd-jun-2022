const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer();

// request -> is a read stream
// response -> is a write stream
server.on( 'request', ( request, response ) => {
    const rs = fs.createReadStream( './lab-guide.pdf' );

    rs.pipe( response );

    // rs.on( 'data', ( chunk ) => {
    //     response.write( chunk );
    // })

    // rs.on( 'end', () => {
    //     response.end()
    // });
});

server.listen( 3000 );
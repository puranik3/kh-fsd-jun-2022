// import http from 'http';
const http = require( 'http' );

const server = http.createServer();

// non-blocking (the code continues execution past this line)
// Hey Node! Whenever this server gets a request, please call f
server.on( 'request', ( request, response ) => { // f
    console.log( request.url );

    switch( request.url ) {
        case '/french':
            response.write( 'Bonjour!' );
            break;
        case '/ukrainian':
            response.write( 'Privit' );
            break;
        case '/hindi':
            response.write( 'Namaste' );
            break;
        default:
            response.write( 'Hello' );
    }

    response.end();
});

// PORT is like a mailbox (a number 0 - 65535; 0 - 1023 are reserved)

server.listen( 3000 );

console.log( 'end of script' );
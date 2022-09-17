const http = require( 'http' );
const url = require( 'url' );

const server = http.createServer();

server.on( 'request', ( request, response ) => { // f
    const requestUrl = request.url;

    // console.log( url.parse( requestUrl ) );
    const { pathname, query } = url.parse( requestUrl )

    switch( pathname ) {
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

server.listen( 3000 );
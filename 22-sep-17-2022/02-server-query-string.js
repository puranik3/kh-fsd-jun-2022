const http = require( 'http' );
const url = require( 'url' );

const server = http.createServer();

// http://127.0.0.1:3000/ukrainian?case=lower
server.on( 'request', ( request, response ) => { // f
    const requestUrl = request.url;

    // NO true -> query = 'case=upper&xyz=123'
    // true -> query = { case: 'upper', xyz: 123 }
    const { pathname, query } = url.parse( requestUrl, true );
    console.log( query.case, query.xyz );

    switch( pathname ) {
        case '/french':
            response.write( query.case === 'upper' ? 'BONJOUR' : 'bonjour' );
            break;
        case '/ukrainian':
            response.write( query.case === 'upper' ? 'PRIVIT' : 'privit' );
            break;
        case '/hindi':
            response.write( query.case === 'upper' ? 'NAMASTE' : 'namaste' );
            break;
        default:
            response.write( query.case === 'upper' ? 'HELLO' : 'hello' );
    }

    response.end();
});

server.listen( 3000 );
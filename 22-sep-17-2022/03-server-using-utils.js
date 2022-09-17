const http = require( 'http' );
const url = require( 'url' );
const Utils = require( './03-utils.js' );

console.log( Utils );

const server = http.createServer();

// http://localhost:3000/french?case=upper
server.on( 'request', ( request, response ) => { // f
    const requestUrl = request.url;

    const { pathname, query } = url.parse( requestUrl, true );
    
    const str = Utils.greetings[pathname];

    const strToSend = Utils.toCase( str, query.case );

    response.end( strToSend );
});

server.listen( 3000 );
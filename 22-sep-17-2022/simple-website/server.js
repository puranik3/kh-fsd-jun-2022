const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer();

// /home -> home.html
// /contact -> contact.html
server.on( 'request', ( request, response ) => {
    const requestUrl = request.url;
    
    if( requestUrl === '/home' ) {
        fs.readFile( './home.html', 'utf-8', ( error, contents ) => {
            if( error ) {
                response.end( 'Sorry, something went wrong internally' );
            } else {
                response.end( contents );
            }
        });
    } else if( requestUrl === '/contact' ) {
        fs.readFile( './contact.html', 'utf-8', ( error, contents ) => {
            if( error ) {
                response.end( 'Sorry, something went wrong internally' );
            } else {
                response.end( contents );
            }
        });
    } else {
        fs.readFile( './not-found.html', 'utf-8', ( error, contents ) => {
            if( error ) {
                response.end( 'Sorry, something went wrong internally' );
            } else {
                response.end( contents );
            }
        });
    }


});

server.listen( 3000 );
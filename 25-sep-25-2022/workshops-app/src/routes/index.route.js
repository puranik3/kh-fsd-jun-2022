const express = require( 'express' );
const path = require( 'path' );

const router = express.Router();

// console.log( router.toString() );

router.get( '/', ( req, res ) => {
    // send() is a combination of write() and end()
    // send() sends an extra HTTP header - 'Content-Type': 'text/html'
    // res.send( 'Hello, Express!!!' );
    res.redirect( '/workshops' ); // Hey browser, could you make a request for /workshops instead?
});

// EXERCISE: Set up a handler for /contact
router.get( '/contact', ( req, res ) => {
    console.log( process.cwd() ); // path to the project folder
    // res.sendFile( path.join( __dirname, '../views/contact.html' ) );
    res.sendFile( path.join( process.cwd(), 'views/contact.html' ) );
});

module.exports = router;

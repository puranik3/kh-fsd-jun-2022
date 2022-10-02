const path = require( 'path' );

const getWorkshops = ( req, res ) => {
    res.redirect( '/workshops' );
};

const getContact = ( req, res ) => {
    res.sendFile( path.join( process.cwd(), 'views/contact.html' ) );
};

module.exports = {
    getWorkshops,
    getContact
};
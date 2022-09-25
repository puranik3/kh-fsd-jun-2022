const express = require( 'express' );
const workshops = require( '../data/workshops' );

const router = express.Router();

router.get( '/workshops', ( req, res ) => {
    res.render( 'workshops', {
        // workshops: workshops
        workshops
    } );
});

router.get( '/workshops/:id', ( req, res ) => {
    const { id } = req.params;

    const idInt = parseInt( id );

    const workshop = workshops.find( workshop => workshop.id === idInt );

    if( !workshop ) {
        res.render( '404' );
        return;
    }
    
    res.render( 'workshop', workshop );
});

module.exports = router;
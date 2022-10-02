const workshops = require( '../data/workshops' );

const getWorkshops = ( req, res ) => {
    res.render( 'workshops', {
        workshops
    } );
};

const getWorkshopById = ( req, res ) => {
    const { id } = req.params;

    const idInt = parseInt( id );

    const workshop = workshops.find( workshop => workshop.id === idInt );

    if( !workshop ) {
        res.render( '404' );
        return;
    }
    
    res.render( 'workshop', workshop );
};

module.exports = {
    getWorkshops,
    getWorkshopById
};
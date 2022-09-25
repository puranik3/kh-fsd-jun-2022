const express = require( 'express' );
const workshops = require( '../data/workshops' );

const router = express.Router();

let nextId = 3;

// Query params -> ?category=frontend
router.get( '/', ( req, res ) => {
    console.log( req.query ); // { category: 'frontend' }
    const { category } = req.query;

    if( category ) {
        const matchedWorkshops = workshops.filter( workshop => workshop.category === category );
        res.json({
            workshops: matchedWorkshops,
            date: req.date
        });
    } else {
        res.json({
            workshops,
            date: req.date
        });
    }
});

router.get( '/:id', ( req, res, next ) => {
    const { id } = req.params;

    const matchedWorkshop = workshops.find( item => item.id == id );

    if( !matchedWorkshop ) {
        const error = new Error( 'Workshop with given id does not exist' );
        error.status = 404;
        next( error );
        return;
    }

    res.json( matchedWorkshop );
});

router.post( '/', ( req, res, next ) => {
    // no data has been sent in the request body
    if( Object.keys( req.body ).length === 0 ) {
        const error = new Error( 'Request body appears to be empty' );
        error.status = 400;
        next( error ); // since we pass an error object to next() the control goes to the error-handling middleware
        return;
    }

    const newWorkshop = {
        id: nextId,
        ...req.body
    };

    workshops.push( newWorkshop );
    nextId++;

    res.send( newWorkshop );
});

router.put( '/:id', ( req, res ) => {
    // get hold of the object
    const { id } = req.params;

    const matchedWorkshopIdx = workshops.findIndex( item => item.id == id );
    const update = req.body; // { date: '07-10-2022' }

    workshops[matchedWorkshopIdx] = {
        ...workshops[matchedWorkshopIdx],
        ...update
    };

    res.json( workshops[matchedWorkshopIdx] );
});

router.delete( '/:id', ( req, res ) => {
    const { id } = req.params;
    const matchedWorkshopIdx = workshops.findIndex( item => item.id == id );

    workshops.splice( matchedWorkshopIdx, 1 );

    // for DELETE operation we generally send an empty response
    // For an empty response the status code is 204 (200 is the default)
    res.status( 204 ).json();
});

module.exports = router;
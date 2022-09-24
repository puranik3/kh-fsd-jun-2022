const express = require( 'express' );

const router = express.Router();

const workshops = [
    {
        id: 1,
        name: 'React',
        category: 'frontend',
        date: '30-09-2022'
    },
    {
        id: 2,
        name: 'Express',
        category: 'backend',
        date: '05-10-2022'
    },
    {
        id: 3,
        name: 'JavaScript',
        date: '15-10-2022',
        category: 'language',
    },
    {
        id: 4,
        name: 'CSS',
        category: 'frontend',
        date: '25-10-2022'
    }
];

let nextId = 3;

// Query params -> ?category=frontend
router.get( '/', ( req, res ) => {
    console.log( req.query ); // { category: 'frontend' }
    const { category } = req.query;

    if( category ) {
        const matchedWorkshops = workshops.filter( workshop => workshop.category === category );
        res.json( matchedWorkshops );
    } else {
        res.json( workshops );
    }
});

router.get( '/:id', ( req, res ) => {
    const { id } = req.params;

    const matchedWorkshop = workshops.find( item => item.id == id );

    res.json( matchedWorkshop );
});

router.post( '/', ( req, res ) => {
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
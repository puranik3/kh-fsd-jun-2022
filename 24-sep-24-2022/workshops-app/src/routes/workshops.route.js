const express = require( 'express' );

const router = express.Router();

const workshops = [
    {
        id: 1,
        name: 'React',
        date: '30-09-2022'
    },
    {
        id: 2,
        name: 'Express',
        date: '05-10-2022'
    },
    {
        id: 3,
        name: 'JavaScript',
        date: '15-10-2022'
    },
    {
        id: 4,
        name: 'CSS',
        date: '25-10-2022'
    }
];

let nextId = 3;

router.get( '/workshops', ( req, res ) => {
    res.json( workshops );
});

router.get( '/workshops/:id', ( req, res ) => {
    const { id } = req.params;

    const matchedWorkshop = workshops.find( item => item.id == id );

    res.json( matchedWorkshop );
});

router.put( '/workshops/:id', ( req, res ) => {
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

router.post( '/workshops', ( req, res ) => {
    const newWorkshop = {
        id: nextId,
        ...req.body
    };

    workshops.push( newWorkshop );
    nextId++;

    res.send( newWorkshop );
});


module.exports = router;
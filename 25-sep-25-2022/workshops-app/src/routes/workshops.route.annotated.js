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
    }
];

let nextId = 3;

// GET List of workshop
router.get( '/workshops', ( req, res ) => {
    res.json( workshops );
});

// GET A single workshop
// In /workshops/:id -> id is called a "path parameter"
// router.get( '/workshops/:id/:action', ( req, res ) => {
router.get( '/workshops/:id', ( req, res ) => {
    console.log( req.params ); // { id: "1" }

    const { id } = req.params; // 
    const idInt = parseInt( id );

    const matchedWorkshop = workshops.find( item => item.id === idInt );

    res.json( matchedWorkshop );
});

// POST Add a workshop to the list of workshops
router.post( '/workshops', ( req, res ) => {
    console.log( req.body );

    // ...req.body copies over the key-value pairs in req.body (name, date)
    const newWorkshop = {
        id: nextId,
        ...req.body
    };

    // add the new workshop to the array
    workshops.push( newWorkshop );

    // set up the id for the next workshop that shall be added
    nextId++;

    res.send( newWorkshop );
});


module.exports = router;
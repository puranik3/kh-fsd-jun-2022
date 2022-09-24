const express = require( 'express' );

const router = express.Router();

const workshops = [
    {
        name: 'React',
        date: '30-09-2022'
    },
    {
        name: 'Express',
        date: '05-10-2022'
    }
];

router.get( '/workshops', ( req, res ) => {
    res.json( workshops );
});

router.post( '/workshops', ( req, res ) => {
    console.log( req.body );

    // add the new workshop to the array
    workshops.push( req.body );

    res.send( req.body );
});

module.exports = router;
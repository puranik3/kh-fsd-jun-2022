const express = require( 'express' );
const path = require( 'path' );
const {
    getWorkshops,
    getWorkshopById,
    postWorkshop,
    putWorkshop,
    deleteWorkshop
} = require( path.join( process.cwd(), '/src/controllers/workshops.controller' ) );

const router = express.Router();

router.get( '/', getWorkshops );
router.get( '/:id', getWorkshopById );
router.post( '/', postWorkshop );
router.put( '/:id', putWorkshop );
router.delete( '/:id', deleteWorkshop );

module.exports = router;
const express = require( 'express' );
const {
    getWorkshops,
    getWorkshopById
} = require( '../controllers/pages.controller' );

const router = express.Router();

router.get( '/workshops', getWorkshops );
router.get( '/workshops/:id', getWorkshopById );

module.exports = router;
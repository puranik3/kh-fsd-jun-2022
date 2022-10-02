const express = require( 'express' );
const {
    getWorkshops,
    getContact
} = require( '../controllers/index.controller' );

const router = express.Router();

router.get( '/', getWorkshops );
router.get( '/contact', getContact );

module.exports = router;

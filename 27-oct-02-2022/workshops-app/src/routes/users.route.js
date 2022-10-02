const express = require( 'express' );
const {
    getUsers, 
    getUserById, 
    postUser, 
    deleteUser
} = require( '../controllers/users.controller' );

const router = express.Router();

router.get( '/', getUsers );
router.get( '/:id', getUserById );

// User registration
router.post( '/', postUser );

// router.put( '/:id', putUser );
router.delete( '/:id', deleteUser );

module.exports = router;
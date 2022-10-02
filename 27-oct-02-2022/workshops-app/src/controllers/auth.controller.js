const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );

const User = mongoose.model( 'User' );

const login = async ( req, res, next ) => {
    // { email: 'john.doe@example.com', password: 'Password123#' }
    const credentials = req.body;

    // STEP 1: we check for email match first...
    // find() return [] if no match. findOne() returns null if no match.
    const user = await User.findOne({
        email: credentials.email
    });

    if( !user ) {
        const error = new Error( 'Bad credentials' );
        error.status = 403;
        return next( error );
    }

    // STEP 2: we have to check for password match
    const isMatch = await bcrypt.compare( credentials.password, user.password );

    if( !isMatch ) {
        const error = new Error( 'Bad credentials' );
        error.status = 403;
        return next( error );
    }

    // STEP 3: Generate a token ("visa")
    const claims = {
        _id: user._id,
        email: user.email,
        role: user.role
    };

    jwt.sign( claims, 'shh...', ( error, token ) => {
        if( error ) {
            error.status = 500;
            return next( error );
        }

        // ...on success we send back some relevant user details
        res.json({
            email: user.email,
            role: user.role,
            token
        });
    });
};

module.exports = {
    login
};
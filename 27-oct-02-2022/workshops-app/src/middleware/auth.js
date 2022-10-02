const jwt = require( 'jsonwebtoken' );

const authenticate = ( req, res, next ) => {
    // extract the token from the Authorization HTTP header
    const token = req.header( 'Authorization' );

    // console.log( token );

    jwt.verify( token, 'shh...', ( error, claims ) => {
        if( error ) {
            error.status = 401;
            return next( error );
        }

        // info that may be useful for the request handler which will be called next
        
        // res.locals.claims = claims;
        req.claims = claims;

        // all good. request can proceed...
        next();
    });
};

// allowedRoles -> [ 'admin', 'manager', ... ]
const authorize = ( allowedRoles ) => {
    return ( req, res, next ) => {
        const claims = req.claims;

        if( !allowedRoles.includes( claims.role ) ) {
            const error = new Error( 'You do not have sufficient privileges' );
            error.status = 403;
            return next( error );
        }

        // all good. request can proceed...
        next();
    };
};

module.exports = {
    authenticate,
    authorize
};
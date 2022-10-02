const apiErrorHandler = ( req, res, next ) => {
    res.status( 404 ).json({
        status: 'error',
        message: 'No handler for this API'
    });
};

const pageNotFound = ( req, res, next ) => {
    res.status( 404 ).render( '404' );
};

module.exports = {
    apiErrorHandler,
    pageNotFound
};

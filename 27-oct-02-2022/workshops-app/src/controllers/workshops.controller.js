const workshops = require( '../data/workshops' );
const mongoose = require( 'mongoose' );

const Workshop = mongoose.model( 'Workshop' );

const getWorkshops = async ( req, res ) => {
    const { category } = req.query;

    let filterClause = {}; // assume no filtering
    
    if( category ) {
        filterClause = {
            category
        };
    }

    try {
        const matchedWorkshops = await Workshop.find( filterClause );
        res.json( matchedWorkshops );
    } catch( error ) {
        error.status = 500; // Internal Server Error
        next( error );
    }
};

const getWorkshopById = async ( req, res, next ) => {
    const { id } = req.params;

    try {
        const matchedWorkshop = await Workshop.findById( id );

        if( !matchedWorkshop ) {
            const error = new Error( 'Workshop with given id does not exist' );
            error.status = 404;
            
            next( error );
            return;
        }

        res.json( matchedWorkshop );
    }  catch( error ) {
        if( error.name === 'CastError' ) {
            error.status = 400; // BAD Request (Client-side error - id is malformed)
        } else {
            error.status = 500; // Internal Server Error
        }

        next( error );
    }
};

const postWorkshop = async ( req, res, next ) => {
    // retrieve logged in user info - this can be useful if we want to customize the response based on the user
    console.log( 'claims = ', req.claims );

    try {
        const newWorkshop = await Workshop.create( req.body );
        res.status( 201 ).send( newWorkshop );
    } catch( error ) {
        // "name" field is to be unique -> violation of this throws MongoServerError
        // Bad / missing fields -> Validation Error
        if( error.name === 'ValidationError' || error.name === 'MongoServerError' ) {
            error.status = 400;
        } else {
            error.status = 500;
        }

        next( error );
    }
};

const putWorkshop = async ( req, res, next ) => {
    const { id } = req.params;

    try {
        const updatedWorkshop = await Workshop.findByIdAndUpdate( id, req.body/*, { returnOriginal: false, runValidators: true } */ );

        if( !updatedWorkshop ) {
            const error = new Error( 'Workshop with given id does not exist' );
            error.status = 404;
            
            next( error );
            return;
        }

        res.json( updatedWorkshop );
    } catch( error ) {
        console.log( error );
        // How this works : [ 10, 20, 30 ].includes( 20 ) -> true ; [ 10, 20, 30 ].includes( 40 ) -> false
        if( [ 'CastError', 'ValidationError', 'MongoServerError' ].includes( error.name ) ) {
            error.status = 400; // BAD Request (Client-side error - id is malformed, bad value for field caused validation failure, unique validation failure caused error on MongoDB end)
        } else {
            error.status = 500; // Internal Server Error
        }

        next( error );
    }
};

const deleteWorkshop = async ( req, res, next ) => {
    const { id } = req.params;

    try {
        const deletedWorkshop = await Workshop.findByIdAndDelete( id );

        if( !deletedWorkshop ) {
            const error = new Error( 'Workshop with given id does not exist' );
            error.status = 404;
            
            next( error );
            return;
        }

        // 204 -> empty response body
        res.status( 204 ).json();
    }  catch( error ) {
        if( error.name === 'CastError' ) {
            error.status = 400; // BAD Request (Client-side error - id is malformed)
        } else {
            error.status = 500; // Internal Server Error
        }

        next( error );
    }
};

module.exports = {
    getWorkshops,
    getWorkshopById,
    postWorkshop,
    putWorkshop,
    deleteWorkshop
};
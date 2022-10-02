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

const putWorkshop = ( req, res, next ) => {
    const { id } = req.params;

    const matchedWorkshopIdx = workshops.findIndex( item => item.id == id );
    const update = req.body;

    workshops[matchedWorkshopIdx] = {
        ...workshops[matchedWorkshopIdx],
        ...update
    };

    res.json( workshops[matchedWorkshopIdx] );
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
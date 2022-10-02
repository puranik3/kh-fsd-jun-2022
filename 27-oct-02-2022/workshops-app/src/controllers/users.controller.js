// const users = require( '../data/users' ); // <- Need this? probably not
const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );

const Users = mongoose.model( 'User' );

const getUsers = async ( req, res, next ) => {
    const { name } = req.query;

    let nameFilter = {};

    if( name ) {
        nameFilter = {
            name
        }
    }

    /* do we need some sort of error handler if there's no match on name? Or partial match?
    To do partial matches we'd have to understand mongodb queries, which we have not touched yet
    */

    try {
        const userList = await Users
        .find( nameFilter )
        .exec();
        res.json( userList );
    } catch {
        error.status = 500;
        next( error );
    }
};

const getUserById = async ( req, res, next ) => {
    const { id } = req.params;

    try {
        const matchedUser = await Users.findById( id );

        if( !matchedUser ) {
            const error = new Error( 'User does not exist' );
            error.status = 404;
            next( error );
            return; // <- need to prevent continuing to next step and responding with matchedUser
        }

        res.json( matchedUser );
    
    } catch( error ) {
        if( error.name === 'CastError' ) {
            error.status = 400;
        } else {
            error.status = 500;
        }

        next( error );
    }
};

const postUser = async ( req, res, next ) => {
    try {
        const password = req.body.password;

        const salt = await bcrypt.genSalt( 10 );
        const hashedPassword = await bcrypt.hash( password, salt );

        if( req.body.role === 'admin' ) {
            delete req.body.role;
        }

        const user = {
            ...req.body,
            password: hashedPassword
        };

        const newUser = await Users.create( user );
        
        res.status( 201 ).send({
            _id: newUser._id,
            email: newUser.email,
            role: newUser.role,
            name: newUser.name,
            password: 'SET'
        });
        
    } catch ( error ) {
        console.log( error );
        console.log( error.name );
        if( error.name === 'ValidationError' || error.name === 'MongoServerError' ) {
            error.status = 400;
        } else {
            error.status = 500;
        }

        next( error );
    }
};

const deleteUser = async ( req, res, next ) => {
    const { id } = req.params;

    try {
        const deletedUser = await Users.findByIdAndDelete( id );

        if( !deletedUser ) {
            const error = new Error( 'User with that ID does not exist' );
            error.status = 404;

            next( error );
            return; // <- ?? necessary with next(error)?
        }

        res.status( 204 ).json();

    } catch( error ) {
        // console.log( error.name );
        if( error.name === 'CastError' ) {
            error.status = 400;
        } else {
            error.status = 500
        }

        next( error ); 
        // ?? Don't understand when to use what error construction, when return is necessary
    }
};

module.exports = {
    getUsers, 
    getUserById, 
    postUser, 
    deleteUser
}
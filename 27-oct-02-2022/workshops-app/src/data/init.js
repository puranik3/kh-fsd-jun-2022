const mongoose = require( 'mongoose' );

// create the models
require( './models/User' );
require( './models/Workshop' );

// find*AndUpdate() should return the updated document
mongoose.set( 'returnOriginal', false );
// find*AndUpdate() should run validation checks before update
mongoose.set( 'runValidators', true );

const connect = async () => {
    try {
        await mongoose.connect( 'mongodb://localhost:27017/workshopsDB' );
        console.log( 'connected to the DB' );
    } catch( error ) {
        console.log( error.message );
    }
};

connect();
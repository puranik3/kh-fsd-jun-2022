const mongoose = require( 'mongoose' );

// create the models
require( './models/Workshop' );

const connect = async () => {
    try {
        await mongoose.connect( 'mongodb://localhost:27017/workshopsDB' );
        console.log( 'connected to the DB' );
    } catch( error ) {
        console.log( error.message );
    }
};

connect();
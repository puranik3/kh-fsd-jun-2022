const mongoose = require( 'mongoose' );

//define the Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: { 
        type: String,
        required: true },
    role: {
        type: String,
        enum: [
            'admin', 'general'
        ],
        default: 'general'
    }
});

// create the model
mongoose.model( 'User', userSchema );
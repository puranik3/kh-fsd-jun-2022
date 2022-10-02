const mongoose = require( 'mongoose' );

// define the Schema
const workshopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        enum: [
            "frontend",
            "backend",
            "database",
            "language",
            "mobile",
            "devops"
        ]
    },
    description: String,
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        address: String,
        city: String,
        state: String
    },
    modes: {
        online: Boolean,
        inPerson: Boolean
    },
    imageUrls: [ String ]
});

// create the model
mongoose.model( 'Workshop', workshopSchema );
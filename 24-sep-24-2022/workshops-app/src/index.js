const express = require( 'express' );
const indexRouter = require( './routes/index.route' );
const workshopsRouter = require( './routes/workshops.route' );

// calling express() creates an "Application" object
const app = express();

// this setting makes sure that if JSON data is sent in a request, it is made available in req.body in any router
app.use( express.json() );

app.use( indexRouter );
app.use( '/workshops', workshopsRouter );

const PORT = process.env.PORT || 3000;

// creates a server and starts it
app.listen( PORT, () => { // this function is called when the server successfully starts up
    console.log( `check http://localhost:${PORT}` );
});
const path = require( 'path' );
const express = require( 'express' );
const indexRouter = require( './routes/index.route' );
const workshopsRouter = require( './routes/workshops.route' );
const pagesRouter = require( './routes/pages.route' );
const {
    apiErrorHandler,
    pageNotFound
} = require( './middleware/errors' );

// calling express() creates an "Application" object
const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), '/views' ) );

// Syntax: app.use( middleware );
// a middleware is a function
app.use(( req, res, next ) => {
    req.date = new Date();
    console.log( 'A request was received at ' + req.date );
    console.log( 'first' );
    next();
})

app.use(( req, res, next ) => {
    console.log( 'second' );
    // uncomment the next line and comment the line with next() to see how the rest of middleware will now not be called
    // res.send( 'I am the second middleware handling a request' );
    next(); // not a good idea to pass on control to the next middleware
})

app.use(( req, res, next ) => {
    console.log( 'third' );
    next();
})

// set up a static file server
app.use( express.static( path.join( process.cwd(), 'public' ) ) );

// this setting makes sure that if JSON data is sent in a request, it is made available in req.body in any router
app.use( express.json() );
// to read data coming from an HTML form submission
app.use( express.urlencoded( { extended: false } ) );

app.use( indexRouter );
app.use( pagesRouter );
app.use( '/api/workshops', workshopsRouter );

app.use( '/api', apiErrorHandler );
app.use( pageNotFound );

// this is considered as the "error-handling middleware"
app.use(( err, req, res, next ) => {
    res.status( err.status ).json({
        status: 'error',
        message: err.message
    });
});

const PORT = process.env.PORT || 3000;

// creates a server and starts it
app.listen( PORT, () => { // this function is called when the server successfully starts up
    console.log( `check http://localhost:${PORT}` );
});
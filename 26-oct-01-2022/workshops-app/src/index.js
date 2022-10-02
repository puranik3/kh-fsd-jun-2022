// connect to the DB
require( './data/init' );

const path = require( 'path' );
const express = require( 'express' );
const indexRouter = require( './routes/index.route' );
const workshopsRouter = require( './routes/workshops.route' );
const pagesRouter = require( './routes/pages.route' );
const {
    apiErrorHandler,
    pageNotFound
} = require( './middleware/errors' );

const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), '/views' ) );

app.use( express.static( path.join( process.cwd(), 'public' ) ) );

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( indexRouter );
app.use( pagesRouter );
app.use( '/api/workshops', workshopsRouter );

app.use( '/api', apiErrorHandler );
app.use( pageNotFound );

app.use(( err, req, res, next ) => {
    res.status( err.status ).json({
        status: 'error',
        message: err.message
    });
});

const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
    console.log( `check http://localhost:${PORT}` );
});
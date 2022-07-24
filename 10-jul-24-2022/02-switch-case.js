/**
 * You have a single variable based on whose values you need to branch off and do something
 */
const state = 'Washington';

switch( state ) {
    case 'Texas':
        console.log( 'Houston' );
        break;
    case 'Washington':
        console.log( 'Olympia' )
        break;
    case 'California':
        console.log( 'Sacramento' );
        break;
    case 'Florida':
        console.log( 'Miami' );
        break;
    default:
        console.log( 'Not sure' );
}
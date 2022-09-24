const lodash = require( 'lodash' );

const arr = [ 10, 20, 30, 40, 30, 20, 10, 50, 40 ];
lodash.pull( arr, 20, 30 );

console.log( arr );
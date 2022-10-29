const linearSearch = ( numbers, key ) => {
    let found = false;

    for( let i = 0 ; i < numbers.length; i++ ) {
        if( numbers[i] === key ) {
            found = true;
            break;
        }
    }

    return found;
}

const searchAndDisplayMessage = ( numbers, key ) => {
    let found = linearSearch( numbers, key );

    if( found ) {
        console.log( `Found ${key}` );
    } else {
        console.log( `Not found ${key}` );
    }
}

const numbers = [ 1200, 1000, 500, 350, 2300, 1350, 250 ];
searchAndDisplayMessage( numbers, 350 ); // exists

numbers.push( 400, 560, 780, 980, 640 );
searchAndDisplayMessage( numbers, 560 ); // exists
searchAndDisplayMessage( numbers, 550 ); // does not exist

// Algorithm Analysis
// T( n ) <= 3 * n
// n = 1024
// T( 1024 ) <= 3072;


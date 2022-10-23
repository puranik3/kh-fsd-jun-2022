// Assumption: numbers is a sorted array (ascending order)
const binarySearch = ( numbers, key ) => {
    let low = 0, high = numbers.length - 1;
    
    while( low <= high ) {
        let mid = Math.floor( ( low + high ) / 2 ); // we take the integer part - hence Math.floor()

        if( numbers[mid] === key ) {
            return mid; // or you can return true
        }

        if( numbers[mid] < key ) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // -1 is a good choice as it is not a valid index - or you can return false
}

const searchAndDisplayMessage = ( numbers, key ) => {
    let foundIdx = binarySearch( numbers, key );

    if( foundIdx !== -1 ) {
        console.log( `Found ${key} at index ${foundIdx}` );
    } else {
        console.log( `Not found ${key}` );
    }
}

// we have a sorted list of number
const numbers = [ 250, 350, 500, 1000, 1200, 1350, 2300 ];
searchAndDisplayMessage( numbers, 350 ); // exists

// numbers.push( 400, 560, 780, 980, 640 );
// searchAndDisplayMessage( numbers, 560 ); // exists
// searchAndDisplayMessage( numbers, 550 ); // does not exist


// dictionary with 65536 pages
// Step 1: 65536 pages under consideration
// Step 2: 32768 pages
// Step 3: 16384 pages
// Step 4: 8192 pages
// Step 5: 4096 pages
// Step 6: 2048 pages
// Step 7: 1024 pages
// Step 8: 512 pages
// Step 9: 256 pages
// Step 10: 128
// Step 11: 64
// Step 12: 32
// Step 13: 16
// Step 14: 8
// Step 15: 4
// Step 16: 2
// Step 17: 1

// Algorithm Analysis
// n -> size of the array
// log n + 1 -> maximum number of loop iterations (log is assumed to be base 2 by default)
// 8 -> a rough estimate of the constant multiple of the maximum number of loop iterations (maximum number of steps in an iterations)
// T( n ) is the maximum number of statements that binarySearch() function will execute, given a sorted array with n items

// T( n ) <= 8 * ( log n + 1 )
// n = 1024
// T( 1024 ) <= 88
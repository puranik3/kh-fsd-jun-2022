// Algorithm design technique - Divide and conquer
// Divide the problem into smaller sub-problems. Once we find the solution to the smaller sub-problems, it can be used to find the solution for the larger problem.

// You have to find the maximum number in an array of numbers

const numbers = [ 1200, 1000, 500, 350, 2300, 1350, 250 ];

const max = ( arr, low = 0, high = arr.length - 1 ) => {
    // base case
    if( low === high ) {
        return arr[low];
    }

    const mid = Math.floor( ( low + high + 1 ) / 2 );

    const maxLeft = max( arr, low, mid - 1 );
    const maxRight = max( arr, mid, high );

    return maxLeft > maxRight ? maxLeft : maxRight;
};

console.log( max( numbers ) );
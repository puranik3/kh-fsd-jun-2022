// Algorithm design technique - Divide and conquer
// Divide the problem into smaller sub-problems. Once we find the solution to the smaller sub-problems, it can be used to find the solution for the larger problem.

// You have to find the maximum number in an array of numbers

const numbers = [ 1200, 1000, 500, 350, 2300, 1350, 250 ];

const max = ( arr ) => {
    // base case
    // if there are only 1 item return it
    if( arr.length === 1 ) {
        return arr[0];
    }

    const mid = Math.floor( arr.length / 2 );

    const left = arr.slice( 0, mid );
    const right = arr.slice( mid );

    // call max with left (returns maxLeft) - solve the smaller problem
    const maxLeft = max( left );

    // call max with right (returns maxRight) - solve the smaller problem
    const maxRight = max( right );

    // now combine the solutions - return the maximum of maxLeft and maxRight
    return maxLeft > maxRight ? maxLeft : maxRight;
};

console.log( max( numbers ) );
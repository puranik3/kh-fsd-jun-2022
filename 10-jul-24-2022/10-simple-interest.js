/**
 * EXERCISE
 * --------
 * Write a function calculateInterest()
 * Inputs: p, n, r
 * Output: interest
 * 
 * interest = p x n x r / 100
 * 
 * Call it a few times with different inputs and log the interest amounts
 */
function calculateInterest( principal, numYears, ratePerAnnum ) {
    let interest = principal * numYears * ratePerAnnum / 100;
    return interest;
}

let p = 10000, n = 20, r = 5;
console.log( calculateInterest( p, n, r ) );

console.log( calculateInterest( 25000, 3, 10 ) );
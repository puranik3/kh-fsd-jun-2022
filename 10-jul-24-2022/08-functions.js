// a function is a set of statements which can be executed on demand, as many times, anywhere in the code
// function signature - function sum( x, y )
// function body - the set of statements - { ... }
// We are "defining" the function - this DOES NOT execute the statements
function sum( x, y ) {
    let result = x + y;
    return result;
}

let a = 12, b = 13;

// Step 1: x = a; y = b;
// Step 2: The function executes and returns
// Step 3: value = result; // the value of sum( a, b ) is its return value
const value = sum( a, b ); // call / invoke the function

console.log( 'value = ', value );
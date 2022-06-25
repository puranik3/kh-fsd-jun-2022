// Assignment statements
let x = 10;
console.log( x ); // 10

let y = 10, z = 20;
x = y + z;
console.log( x ); // 30

x = y + 100;
console.log( x );

x = true;
console.log( x );

x = "Hello, world";
console.log( x );

x = y;
console.log( x ); // 10

console.clear(); // clears the console

let friends = [ "john", "jane", "mark" ];
console.log( friends );
console.log( friends[0] ); // Use Alt + Shift + Down-arrow to copy the line to the next line
console.log( friends.length ); // 3

let numFriends = friends.length;
console.log( numFriends );

console.clear();

let evens = [ 2, 4, 6, 8, 10 ];
evens[1] = evens[2] + evens[3];
console.log( evens ); // [ 2, 14, 6, 8, 10 ]
console.log( evens[1] ); // 14

console.clear();

let primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ];

// print the first item
let idx = 0;
console.log( primes[idx] );

// print the second item
idx = idx + 1; // 1
console.log( primes[idx] );

// EXERCISE: print the next item
idx = idx + 1; // 2
console.log( primes[idx] );

idx = idx + 1; // 3
console.log( primes[idx] );

// We are repeating the same 2 statements!

// What is the last value of idx?

// print all the items in the list

console.clear();

idx = 0;

// while the conditional expression is true, the block of statement keep executing
// Heads up: Please pay attention to the "syntax" of these statements - it is most important to understand how the loop works, but also important to pay attention to and use the correct syntax (the computer is very unforgiving if we use the wrong syntax)
while( idx <= primes.length - 1 ) {
    console.log( primes[idx] )
    idx = idx + 1;
}

/**
 * while( 0 <= 8 ) -> the statements do execute. idx is 1
 * while( 1 <= 8 ) -> the statements do execute. idx is 2
 * while( 2 <= 8 ) -> the statements do execute. idx is 3
 * while( 3 <= 8 ) -> the statements do execute. idx is 4
 * while( 4 <= 8 ) -> the statements do execute. idx is 5
 * while( 5 <= 8 ) -> the statements do execute. idx is 6
 * while( 6 <= 8 ) -> the statements do execute. idx is 7
 * while( 7 <= 8 ) -> the statements do execute. idx is 8
 * while( 8 <= 8 ) -> the statements do execute. idx is 9
 * while( 9 <= 8 ) -> the statements stop executing
 */

let nums = [ 1, 2, 3, 4, 5 ];

// Set the items to their squares
// nums[0] = nums[0] * nums[0];
// nums[1] = nums[1] * nums[1];
// nums[2] = nums[2] * nums[2];
// nums[3] = nums[3] * nums[3];
// nums[4] = nums[4] * nums[4];

// EXERCISE: Instead of doing the above individually, use a loop to do it
// Hint: Substitute the index with a variable, and keep adding 1 to the index. This forms a repeatable set of statements.

idx = 0;

while( idx <= nums.length - 1 ) {
    nums[idx] = nums[idx] * nums[idx];
    idx = idx + 1;
}

console.log( nums );

console.clear();

// We want to find out the sum of numbers in an array
nums = [ 1, 2, 3, 4, 5 ];

// let result = nums[0] + nums[1] + nums[2] + nums[3] + nums[4];
// console.log( result );

// Calculate the result (the sum of numbers)
let result = 0;
idx = 0;

while( idx <= nums.length - 1 ) {
    result = result + nums[idx];
    idx = idx + 1;
}

console.log( result ); // should be 15

/**
 * 118. result = 0, idx = 0
 * 
 * iteration 1:
 * 121. result = result + nums[idx]
 *      result = result + nums[0]
 *      result = 0 + 1
 *      result = 1
 * 122. idx = idx + 1
 *      idx = 0 + 1
 *      idx = 1
 * 
 * iteration 2:
 * 121. result = result + nums[idx]
 *      result = result + nums[1]
 *      result = 1 + 2
 *      result = 3
 * 122. idx = idx + 1
 *      idx = 1 + 1
 *      idx = 2
 * 
 * Iteration 3
 * result = result + nums[idx]
 * result = result + nums[2]
 * result =   3    +   3
 * result = 6
 * idx = 3
 * 
 * Iteration 4
 * result = result + nums[idx]
 * result = result + nums[3]
 * result =   6    +   4
 * result = 10
 * idx = 4
 * 
 * Iteration 5
 * result = result + nums[idx]
 * result = result + nums[4]
 * result =   10   +   5
 * result = 15
 * idx = 5
 */
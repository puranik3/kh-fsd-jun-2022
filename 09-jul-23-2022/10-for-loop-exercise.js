/**
 * 1 + 2 + 3 + ... + 10
 *
 * Let's start accumulating...
 * sum = 0
 * 0 + 1 = 1
 * 1 + 2 = 3
 * 3 + 3 = 6
 * 6 + 4 = 10
 * 10 + 5 = 15
 * 15 + 6 = 21
 */
let sum = 0;

// sum = sum + 1;
// sum = sum + 2;
// sum = sum + 3;
// sum = sum + 4;
// sum = sum + 5;
// sum = sum + 6;
// sum = sum + 7;
// sum = sum + 8;
// sum = sum + 9;
// sum = sum + 10;

for( i = 1; i <= 10; ++i ) {
    sum = sum + i;
}

console.log( 'sum = ', sum );


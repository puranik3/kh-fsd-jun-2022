// for is best when we want to execute the loop statements a fixed number of times
// for( initializer; check; change variable ) {}
for( let count = 0; count < 10; ++count ) {
    console.log( 'hello' );
    console.log( 'world' );

    console.log( 'count = ', count + 1 );

    // count++;
}

// Self-exploration : you can explore when free why these expressions are evaluated differently
// let x = 10, y = 10;
// console.log( ++x * 3 + 5 );
// console.log( y++ * 3 + 5 );
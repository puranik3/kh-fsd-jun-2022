// substring - a part of a string
let quote = 'With great power comes great responsibility';
let part = quote.substring( 11, 22 ); // 'great power'
console.log( part );

// find if a string includes another string
console.log( quote.includes( 'great' ) ); // true
console.log( quote.includes( 'world' ) ); // false

// replace a phrase with another
let newQuote = quote.replace( 'great', 'greater' );
console.log( 'quote = ', quote );
console.log( 'newQuote = ', newQuote );

quote = quote.replace( 'great', 'greater' );
console.log( quote );

// convert all characters to upper case / lower case
quote = quote.toLowerCase();
console.log( quote );

quote = quote.toUpperCase();
console.log( quote );

// split
const words = quote.split( ' ' ); // [ 'with', 'great', 'power', ... ]
console.log( words );
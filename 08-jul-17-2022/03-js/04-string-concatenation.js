let message = 'Good afternoon', name = 'John';
let greeting = message + ' ' + name;

console.log( greeting );

// ${variable} works only for backtick-quoted strings
let greeting2 = `${message} ${name}`;
console.log( greeting2 );
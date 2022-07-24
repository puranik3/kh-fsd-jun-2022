// if a finishes completes execution without a return encountered, it returns undefined
function foo() {
    console.log( 'foo was called' );
}

console.log( foo() ); // undefined
console.log( foo() ); // undefined
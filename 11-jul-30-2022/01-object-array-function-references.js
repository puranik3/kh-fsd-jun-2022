// primitive value - number / boolean / string
// pritive values are copied by value
const x = 100;
let y = x; // copy by value

y++; // y has increased

console.log( x, y ); // x is unchanged

// non-primitives - object / array / function
const john = {
    name: 'John',
    age: 32
};

let jonathan = john; // copy by reference
jonathan.name = 'Jonathan';
john.age++;

console.log( john, jonathan );

const numbers = [ 1, 2, 3, 4 ];
const nums = numbers; // copy by reference

nums.push( 5 );
console.log( nums, numbers );

function sum( x, y ) {
    return x + y;
}

// add and sum are one and the same function
const add = sum; // copy by reference

console.log( add( 12, 13 ) );
const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@yahoo.com'
    ]
};

const keys = Object.keys( john ); // [ 'name', 'age' ]

console.log( keys );

// let us find the value for each key...
// keys = [ 'name', 'age' ]
keys.forEach(
    function( key ) {
        console.log( key, john[key] ); // key and its value

        // if the value happens to be an array, let us print its first item...
        if( john[key] instanceof Array ) {
            console.log( `first item of ${key}: ${john[key][0]}` );
        }
    }
);
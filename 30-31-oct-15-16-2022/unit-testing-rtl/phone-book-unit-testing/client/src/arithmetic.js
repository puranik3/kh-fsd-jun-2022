const sum = ( x, y ) => x + y;

const divide = ( x, y ) => {
    if( y === 0 ) {
        throw new Error( 'Division by 0 is not supported' );
    }

    return x / y;
};

export {
    sum,
    divide
};
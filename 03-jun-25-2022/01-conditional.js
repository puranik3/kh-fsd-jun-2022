// IF statement -> helps us do something when a condition is met
let isAmazonPrimeMember = true; // you can try what happens when this is false

if( isAmazonPrimeMember == true ) {
    console.log( '1-day shipping is available for you' );
    console.log( 'Free shipping for you' );
}

console.clear();

// IF..ELSE statement -> do one of 2 things
let isRaining = true;
let isCabAvailable = false;
let cab = 'Lyft';

// EXERCISE: Modify this to print 'Amex' if cab is Lyft, and 'Paypal' if not Lyft (this is to be printed only if cab is available)

if( isRaining == true ) {
    // it is raining...
    if( isCabAvailable == true ) {
        if( cab == 'Lyft' ) {
            console.log( 'Amex' );
        } else {
            console.log( 'Paypal' );
        }

        console.log( 'Go out hands-free' );
    } else {
        console.log( 'Carry the umbrella' );
    }
} else {
    // it is not raining...
    console.log( 'Wear my sunglasses' );
}

if( isRaining == true && isCabAvailable == true && cab == 'Lyft' ) {
    console.log( 'Amex' );
    console.log( 'Go out hands-free' );
} else if( isRaining == true && isCabAvailable == true && cab != 'Lyft' ) {
    console.log( 'Paypal' );
    console.log( 'Go out hands-free' );
} else if( isRaining === true && isCabAvailable != true ) {
    console.log( 'Carry the umbrella' );
} else if( isRaining != true ) {
    console.log( 'Wear my sunglasses' );
}

console.clear();

// how can we modify this logic to print ONLY the odd numbers
let nums = [ 1, 2, 3, 4, 5, 7, 8, 9, 11, 10 ];
let idx = 0;

while( idx <= nums.length - 1 ) {
    // check if nums[idx] does not leave a 0 as remainder, and if so print it
    if( nums[idx] % 2 != 0 ) {
        console.log( nums[idx] );
    }

    // idx = idx + 2; // this is helpful when we want to skip alternative numbers
    idx = idx + 1;
}

// console.clear();

// console.log( 10 % 4 ); // remainder when 10 is divided by 4
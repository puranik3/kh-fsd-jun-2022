// ! (not), && (and), || (or)
let bankBalance = 5000, invoiceAmount = 2000, maxTransaction = 2500;

// && operator
// true && false -> false (&& ensures all conditions are met)
let proceed = bankBalance >= invoiceAmount && invoiceAmount <= maxTransaction;

if( proceed ) {
    bankBalance = bankBalance - invoiceAmount;
    console.log( 'Payment successful. New balance = ' + bankBalance );
} else {
    console.log( 'Payment declined' );
}

// || operator
// true || false -> true
// false || true -> true
// true || true -> true
// false || false -> false
invoiceAmount = 7000;
let ccLimit = 10000;

// invoiceAmount <= bankBalance -> false (7000 <= 2000 -> false)
// invoiceAmount <= ccLimit -> true (7000 <= 10000 -> true)
// false || true -> true
proceed = invoiceAmount <= bankBalance || invoiceAmount <= ccLimit;

if( proceed ) {
    console.log( 'Payment successful' );
} else {
    console.log( 'Payment declined' );
}

console.clear();

// ! operator
// !true -> false
// !false -> true
let accountDisabled = true;

// precedence - (), &&, ||
// proceed = (false) || (true) && false
// proceed = false || false
// proceed = false
proceed = ( invoiceAmount <= bankBalance ) || ( invoiceAmount <= ccLimit ) && !accountDisabled;

if( proceed ) {
    console.log( 'Payment successful' );
} else {
    console.log( 'Payment declined' );
}
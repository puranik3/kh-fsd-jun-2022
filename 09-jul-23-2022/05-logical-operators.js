// ! (not), && (and), || (or)
let bankBalance = 5000, invoiceAmount = 2000, maxTransaction = 2500;

// true && false -> false (&& ensures all conditions are met)
let proceed = bankBalance >= invoiceAmount && invoiceAmount <= maxTransaction;

if( proceed ) {
    bankBalance = bankBalance - invoiceAmount;
    console.log( 'Payment successful. New balance = ' + bankBalance );
} else {
    console.log( 'Payment declined' );
}
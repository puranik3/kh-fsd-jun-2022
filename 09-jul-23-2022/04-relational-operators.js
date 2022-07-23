let bankBalance = 4000, amountToWithdraw = 5000;

// relational expressions evaluate to true / false
// = is the "assignment operator" (assigns the value of the expression on the right side to the variable on the left)
let proceed = bankBalance > amountToWithdraw;
console.log( proceed ); // false

bankBalance = 6000;
proceed = bankBalance > amountToWithdraw;
console.log( proceed ); // true

// Others: <, <=, >=, ==, ===, !=, !==
bankBalance = 5000;
proceed = bankBalance >= amountToWithdraw;
console.log( proceed );

console.clear();

let cartTotal = 150, paymentAmount = 150;
let processTransaction = ( cartTotal == paymentAmount );
console.log( processTransaction );

paymentAmount = '150';
processTransaction = ( cartTotal == paymentAmount ); // true
console.log( processTransaction );

let finalAmount;

if( processTransaction ) {
    finalAmount = paymentAmount + 10;
    console.log( finalAmount );
}

processTransaction = ( cartTotal === paymentAmount ); // false
console.log( processTransaction );

if( processTransaction ) {
    finalAmount = paymentAmount + 10;
    console.log( finalAmount );
} else {
    console.log( 'Something went wrong. Cannot proceed with the transaction' );
}
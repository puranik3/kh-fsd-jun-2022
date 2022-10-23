const selectionSort = ( numbers ) => {
    for( let startIdx = 0; startIdx < numbers.length - 1; startIdx++ ) {
        let temp;

        for( let i = startIdx + 1; i < numbers.length; i++ ) {
            if( numbers[startIdx] > numbers[i] ) {
                // we need to swap these 2 array items
                temp = numbers[i];
                numbers[i] = numbers[startIdx];
                numbers[startIdx] = temp;
            }
        }
    }
};

const numbers = [ 1200, 1000, 500, 350, 2300, 1350, 250 ];

selectionSort( numbers ); // this would sort the array
console.log( numbers ); // the sorted array

// Algorithm analysis
// Outer for loop runs n - 1 times

// Iteration 1 (of the outer loop)
// Inner for loop runs n - 1 times. Each time a maximum of 6 statement execute (2 comparisons, 1 increment, and 3 for (possibly) swapping).
// 6 * ( n - 1 )

// Iteration 2 (of the outer loop)
// Inner for loop runs n - 2 times
// 6 * ( n - 2 )

// Iteration 3
// 6 * ( n - 3 )

// ...other iterations

// Iteration n - 1
// 6

T(n) <= 6 + 6 * 2 + 6 * 3 + 6 * 4 + ... + 6 * ( n - 2 ) + 6 * ( n - 1 )
T(n) <= 6 * ( 1 + 2 + 3 + 4 + ... + ( n - 2 ) + ( n - 1 ) )
T(n) <= 6 * ( n - 1 ) * ( n - 2 ) / 2
T(n) <= 3 * ( n - 1 ) * ( n - 2 )
T(n) <= 3 * ( n^2 - 3n + 2 )
T(n) <= 3n^2 - 9n + 6

// For large sized arrays, the constants and lower order terms (9n, 6) do not matter in the analysis
We say T(n) is O(n^2)
/**
 * Let's divide and conquer in order to sort the array
 * 
 * left -> [ 1200, 1000, 500 ]
 * right -> [ 350, 2300, 1350, 250 ]
 * 
 * left sorted -> [ 500, 1000, 1200 ]
 * right sorted -> [ 250, 350, 1350, 2300 ]
 * 
 * Can you use the sorted left and right arrays to arrive at the sorted array?
 * 
 * merged array -> []
 * 
 * lIdx = 0, rIdx = 0
 * 1. Compare left[lIdx] and right[rIdx] and push the lower one to the merged array
 * merged array -> [ 250 ]
 * rIdx++ (right right array had its item pushed)
 * 
 * 2. Compare left[0] and right[1]
 * merged array -> [ 250, 350 ]
 * rIdx++ (now 2)
 * 
 * 3. merged array -> [ 250, 350, 500 ]
 * lIdx -> 1, rIdx -> 2
 * 
 * 4. merged array -> [ 250, 350, 500, 1000 ]
 * lIdx -> 2, rIdx -> 2
 * 
 * 5. merged array -> [ 250, 350, 500, 1000, 1200 ]
 * lIdx -> 3, rIdx -> 2
 * 
 * We have run out of items in one of the arrays (left array)
 * We copy over the item that remain in the array that is left over (right array)
 * We can use rIdx to copy over the remaining items (while incrementing rIdx)
 * 6. merged array -> [ 250, 350, 500, 1000, 1200, 1350, 2300 ]
 */

const numbers = [ 1200, 1000, 500, 350, 2300, 1350, 250 ];

const mergeSort = ( arr, low = 0, high = arr.length - 1 ) => {
    if( low === high ) {
        return; // already sorted -> so nothing else to be done
    }

    // divide
    const mid = Math.floor( ( low + high + 1 ) / 2 );
    mergeSort( arr, low, mid - 1 ); // left array will be sorted after this line
    mergeSort( arr, mid, high ); // right array will be sorted after this line

    // conquer (merging)
    const mergedArray = [];

    let lIdx = low, rIdx = mid;
    
    while( lIdx <= ( mid - 1 ) && rIdx <= high ) {
        if( arr[lIdx] < arr[rIdx] ) {
            mergedArray.push( arr[lIdx] );
            lIdx++;
        } else {
            mergedArray.push( arr[rIdx] );
            rIdx++;
        }
    }

    while( lIdx <= mid - 1 ) {
        mergedArray.push( arr[lIdx] );
        lIdx++;
    }
    
    while( rIdx <= high ) {
        mergedArray.push( arr[rIdx] );
        rIdx++;
    }

    // copy over the sorted array (mergedArray) to the original array that is passed (arr)
    for( let idx = 0; idx < mergedArray.length; idx++ ) {
        arr[low + idx] = mergedArray[idx];
    }
};

mergeSort( numbers ); // this shall sort the numbers array that is passed (in place)
console.log( numbers );

// Algorithm Analysis
// k -> some constant that takes care of all the "fixed" steps
// T( n ) <= 2 * T( n / 2 ) + an + b
// T( n / 2 ) <= 2 * T( n / 4 ) + a ( n / 2 ) + b
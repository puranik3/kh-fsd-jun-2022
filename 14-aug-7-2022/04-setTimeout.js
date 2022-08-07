// Event queue
// A queue of functions waiting to be executed

console.log( 1 );

setTimeout(
    function() { // f -> gets queued up immediately
        console.log( 2 );
    },
    0
);

console.log( 3 );

// Now the node/browser is free. So it checks the event queue. If any functions exist in the queue, they are picked up in order and executed.
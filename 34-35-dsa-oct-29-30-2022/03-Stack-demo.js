import Stack from './03-Stack.js';
import UserAction from './03-UserAction.js';

// userActions = { items: [], push() { ... }, ... }
const userActions = new Stack();

// simulate some user actions
const action1 = new UserAction( 'S' ); // { action: 'S' }
userActions.push( action1 );

const action2 = new UserAction( 't' ); // { action: 't' }
userActions.push( action2 );

userActions.push( new UserAction( 'a' ) );
userActions.push( new UserAction( 'c' ) );
userActions.push( new UserAction( 'k' ) );

userActions.print();

// small applications (Stack is useful to reverse items)
// write out to terminal without a newline being added (works in Node)
while( !userActions.isEmpty() ) {
    process.stdout.write( userActions.pop().action );
}

process.stdout.write( '\n' ); // print a new line character
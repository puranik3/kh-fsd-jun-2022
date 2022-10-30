class Node {
    constructor( data ) {
        this.data = data;
        this.next = null; // will refer to the "next" Node in the sequence
    }

    setData( data ) {
        this.data = data;
    }
}

class LinkedList {
    // the next property of this "head node" stores the actual "first Node"
    head = new Node();
    
    // the next property of this "tail node" stores the actual "last Node"
    tail = new Node();

    // data will be added in a new Node which is inserted after the node passed as the first argument
    insert( node, data ) {
        const newNode = new Node( data );
        newNode.next = node.next;
        node.next = newNode;

        // if we insert the new node at the end, let us update the tail
        if( newNode.next === null ) {
            this.tail.next = newNode;
        }
    }

    push( data ) {
        // the list is empty. the push can be viewed as a shift instead (for convenience)
        if( this.head.next === null ) {
            this.shift( data );
        } else { // list is not empty
            this.insert( this.tail.next, data );
        }
    }

    shift( data ) {
        this.insert( this.head, data );
    }

    print() {
        let node = this.head.next;

        while( node !== null ) {
            console.log( node.data );
            node = node.next;
        }
    }
}

export default LinkedList;
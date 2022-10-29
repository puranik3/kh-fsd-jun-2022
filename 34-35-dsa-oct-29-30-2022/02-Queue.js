class Queue {
    // we implement this queue using an array, but other forms of structured memory may be used
    items = [];

    // or initialize items this way if you need for customization when you create a Queue object
    // constructor( items ) {
    //     this.items = items;
    // }

    // push() 
    enqueue( item ) {
        this.items.push( item );
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log( this.items );
    }
}

export default Queue;
class Stack {
    // we shall consider the last item as the TOP of the stack
    items = [];

    push( item ) {
        this.items.push( item );
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        const idx = this.items.length - 1;
        return this.items[idx];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        const top = this.items.length - 1;

        for( let i = top; i >= 0; i-- ) {
            console.log( this.items[i] );
        }
    }
}

export default Stack;
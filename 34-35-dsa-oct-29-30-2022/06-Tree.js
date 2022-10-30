class Node {
    constructor( data ) {
        this.data = data;
        this.children = []; // this shall hold the references to the children Nodes
    }

    setData( data ) {
        this.data = data;
    }
}

class Tree {
    // this will refer to the node without a parent
    root = new Node();

    insert( data, parent = this.root ) {
        if( parent === this.root && parent.children[0] ) {
            throw new Error( 'Root already exists' );
        }

        const newNode = new Node( data );
        parent.children.push( newNode );
        return newNode;
    }

    preOrder( start = this.root.children[0], level = 0 ) {
        // insert spaces based on the level of the node
        for( let i = 0; i < level; i++ ) {
            process.stdout.write( '    ' );
        }

        if( start.data.toString ) {
            console.log( start.data.toString() );
        } else {
            console.log( start.data );
        }

        for( let i = 0; i < start.children.length; i++ ) {
            this.preOrder( start.children[i], level + 1 );
        }
    }
}

export default Tree;
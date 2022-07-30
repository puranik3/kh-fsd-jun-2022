const john = {
    name: 'John',
    age: 32
};

const jane = {
    name: 'Jane',
    age: 28
};

// Define a "class" when you have to create objects that are similar
class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;

        // "this" is returned by default by the constructor
        // return this; // return the newly created object
    }
}

// We must use the new operator when creating an object
const mark = new Person( 'Mark', 40 ); // {}
console.log( mark ); // { name: 'Mark', age: 40 }
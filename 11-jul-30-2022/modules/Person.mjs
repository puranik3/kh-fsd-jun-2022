// Define a "class" when you have to create objects that are similar
class Person {
    constructor( name, age, getTitle ) {
        this.name = name;
        this.age = age;

        // "this" is returned by default by the constructor
        // return this; // return the newly created object
    }

    celebrateBirthday() {
        ++this.age;
    }
}

const sum = ( x, y ) => x + y;

export {
    Person as default,
    sum
};
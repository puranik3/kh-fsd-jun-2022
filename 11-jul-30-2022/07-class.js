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

    celebrateBirthday() {
        this.age++;
    }
}

// We must use the new operator when creating an object
const mark = new Person( 'Mark', 40 ); // {}
mark.celebrateBirthday();
console.log( mark ); // { name: 'Mark', age: 41 }

const mary = new Person( 'Mary', 44 );
mary.celebrateBirthday();
console.log( mary );

class Movie {
    constructor(name, cast, yearOfRelease, boxOfficeCollection) {
        this.name = name;
        this.cast = cast;
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = boxOfficeCollection;
    }

    addToCast( newMember ) {
        this.cast.push( newMember );
    }

    addToCollection( amount ) {
        this.boxOfficeCollection += amount;
    }
}

const alien = new Movie( 'Alien', [ 'Sigourney Weaver', 'Yapha Kotto'], 1976, 10000000 );
alien.addToCollection( 5000000 );
alien.addToCast( 'Another person' )

console.log( alien );
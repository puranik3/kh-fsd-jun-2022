import Human, { sum } from './Person.mjs';
import { Movie } from './Movie.mjs';

// We must use the new operator when creating an object
const mark = new Human( 'Mark', 40 ); // {}
mark.celebrateBirthday();
console.log( mark ); // { name: 'Mark', age: 41 }

const mary = new Human( 'Mary', 44 );
mary.celebrateBirthday();
console.log( mary );

const alien = new Movie( 'Alien', [ 'Sigourney Weaver', 'Yapha Kotto'], 1976, 10000000 );
alien.addToCollection( 5000000 );
alien.addToCast( 'Another person' )

console.log( alien );
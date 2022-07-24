const cities = [ 'New York', 'London', 'Paris' ];

let n = cities.length;
cities[n] = 'Berlin'; // add to the end
cities[n + 2] = 'Beijing'; // we "skipped" an item

// a method to add to the end of an array
cities.push( 'New Delhi' );

console.log( cities );
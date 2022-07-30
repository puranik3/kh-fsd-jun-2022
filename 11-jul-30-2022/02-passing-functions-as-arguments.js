function print( person, getTitle ) {
    const title = getTitle( person );
    // person.age++; // this would change the passed object
    console.log( `${title} ${person.name} is ${person.age} years old` );
}

const john = {
    name: 'John',
    gender: 'male',
    age: 32
};

const jane = {
    name: 'Jane',
    gender: 'female',
    age: 28
};

function getEnglishTitle( person ) {
    if( person.gender === 'male' ) {
        return 'Mr.';
    } else {
        return 'Ms.';
    }
}

function getFrenchTitle( person ) {
    if( person.gender === 'male' ) {
        return 'Monsieur';
    } else {
        return 'Mademoiselle';
    }
}

// person = john / jane (copy by reference)
// getTitle = getEnglishTitle / getFrenchTitle
print( john, getEnglishTitle );
print( jane, getFrenchTitle );
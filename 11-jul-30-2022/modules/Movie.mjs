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

export {
    Movie
};
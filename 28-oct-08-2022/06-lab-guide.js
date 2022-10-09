// a) Comparison (i.e. relational) operators (including equality, i.e. exact match) 
// i. Find shows that are less than one hour duration 
db.shows.find(
    {
        runtime: {
            $lt: 60
        }
    }
)

// number of such shows
db.shows.find(
    {
        runtime: {
            $lt: 60
        }
    }
).count()

// ii. Find shows with runtime between 30 and 60 minutes 
db.shows.find(
    {
        runtime: {
            $lt: 60,
            $gt: 30
        }
    }
).count()

// iii. Find shows with average rating at least 8 
// count -> 
db.shows.find(
    {
        "rating.average": {
            $gte: 8
        }
    }
).count()

// iv. Find shows with rating between 8 and 9 
// exercise

// v. Find shows in horror genre (treat an array of values as a normal value)
db.shows.find(
    {
        genres: 'Horror'
    }
).count()

// vi. Find shows which have ONLY horror as their genre 
// count -> 0
db.shows.find(
    {
        genres: [ 'Horror' ]
    }
).count()

// b)  Special comparison operators that match within a list of values - $in, $nin (use these 
// operators in your solution) 

// i) Find shows that have one of Drama or Horror as genres in them 
// count -> 159
db.shows.find(
    {
        genres: {
            $in: [ 'Drama', 'Horror' ]
        }
    }
).count()

// ii) Find shows that are of type Animation or Reality
db.shows.find(
    {
        type: {
            $in: [ 'Animation', 'Reality' ]
        }
    }
).count()

// iii) Find shows that have neither Drama nor Horror as genres in them 
db.shows.find(
    {
        genres: {
            $nin: [ 'Drama', 'Horror' ]
        }
    }
).count();

// iv) Find shows that are neither of type Animation, nor Reality
db.shows.find(
    {
        type: {
            $nin: [ 'Animation', 'Reality' ]
        }
    }
).count()

// v) Find shows that are not running on the network HBO, nor FOX
db.shows.find(
    {
        "network.name": {
            $nin: [ 'HBO', 'FOX' ]
        }
    }
).count()

// c) Logical operators 
// i) Find shows that have one of Drama or Horror as genres in them (try this 
// without using $in) 
db.shows.find(
    {
        $or: [
            {
                genres: 'Drama'
            },
            {
                genres: 'Horror'
            }
        ]
    }
).count()

// ii) Find shows that have neither Drama nor Horror as genres in them (try this with $not and $in)
// count -> 81
db.shows.find(
    {
        $and: [
            {
                genres: {
                    $ne: 'Drama'
                }
            },
            {
                genres: {
                    $ne: 'Horror'
                }
            }
        ]
    }
).count()

// iii) Find shows that have BOTH Drama and Horror as their genre 
db.shows.find(
    {
        $and: [
            {
                genres: 'Drama'
            },
            {
                genres: 'Horror'
            }
        ]
    }
).count()

// iv) Find shows that have genre Drama but not Horror. Again, find shows that have genre Horror but not Drama. 
// ( genres has 'Drama' && genres does not have 'Horror' ) || ( genres does not have 'Drama' && genres has 'Horror' )
// count -> 142
db.shows.find(
    {
        $or: [
            {
                $and: [
                    {
                        genres: 'Drama'
                    },
                    {
                        genres: {
                            $ne: 'Horror'
                        }
                    }
                ]
            },
            {
                $and: [
                    {
                        genres: {
                            $ne: 'Drama'
                        }
                    },
                    {
                        genres: 'Horror'
                    }
                ]
            }
        ]
    }
).count();

// v) Find shows that do not have at least one of Drama or Horror as their genre 
// (i.e. show could have Drama but not Horror, Horror but not Drama, or neither 
// Drama not Horror) 
// count -> 223
db.shows.find(
    {
        $or: [
            {
                genres: {
                    $ne: 'Drama'
                }
            },
            {
                genres: {
                    $ne: 'Horror'
                }
            }
        ]
    }
).count();

// d)  Element operators - $exists and $type 
// i) Find shows that have a webChannel property 
db.shows.find(
    {
        webChannel: {
            $exists: true
        }
    }
).count();

// ii) Find shows that have a webChannel with a country field within 
// exercise

// iii) Find shows which do not have a web channel (null)
// exercise

// iv) Find shows which have a web channel (not null, but an object) 
db.shows.find(
    {
        webChannel: {
            $type: 'object'
        }
    }
).count();

// v) Find shows which have a web channel (not null, but an object), but country for 
// webChannel is null
// exercise

// Array query operators
// i) Find shows that have BOTH Drama and Horror as their genre. Use $all.
// count -> 17
db.shows.find(
    {
        genres: {
            $all: [ 'Drama', 'Horror' ]
        }
    }
).count()

// ii) Find shows that are scheduled on both "Monday" and "Tuesday"
// exercise
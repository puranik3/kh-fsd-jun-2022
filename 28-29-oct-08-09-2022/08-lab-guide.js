// a) Field update operators - $inc, $min, $max, $mul, $rename, $set, $unset

// Programming equivalents of various update operators
// x = 10; // set
// x = x + 10; // inc
// x = x > 50 ? x : 50; // max (Math.max( x, 50 ))

// i. Find all shows that are in English and have network -> country code as US, and set
// the language as English (US) instead. Also add a new field "locale" and set it to "en-US"
// 1st argument - filtering criteria (same as 1st argument passed to find())
// 2nd argument - update clause
db.shows.updateMany(
    {
        language: 'English',
        "network.country.code": 'US'
    },
    {
        $set: {
            locale: 'en-US'
        }
    }
)

// ii. Find the first show that has a weight of less than 40 and rating more than 7 and increase weight by 10. Also set a new field "criticsChoice" to true.
db.shows.updateOne(
    {
        weight: {
            $lt: 40
        },
        "rating.average": {
            $gt: 7
        }
    },
    {
        $set: {
            criticsChoice: true
        },
        $inc: {
            weight: 10
        }
    }
)

// iii. Find the first show that has a weight of more than 80 and rating less than 6 and
// decrease weight by 10. Also set a new field “criticsChoice” to false.
// exercise


// iv. Find all shows that have a weight of less than 50 and rating more 7 and set
// weight to maximum( 50, current value ).
db.shows.find(
    {
        weight: {
            $lt: 50
        },
        "rating.average": {
            $gt: 7
        }
    },
    {
        name: true,
        weight: true,
        "rating.average": true
    }
);

db.shows.updateMany(
    {
        weight: {
            $lt: 50
        },
        "rating.average": {
            $gt: 7
        }
    },
    {
        $max: {
            weight: 50
        }
    }
);

// v. Find all shows that have a weight of less than 60 and rating more 8 and multiply the
// weight by 1.333333
// exercise

// vi. Rename criticsChoice field as cc in all documents
db.shows.updateMany(
    {}, // all documents are to be retrieved for updation
    {
        $rename: {
            criticsChoice: 'cc'
        }
    }
);


// vii. Remove field cc (criticsChoice) from all documents
db.shows.updateMany(
    {}, // all documents are to be retrieved for updation
    {
        $unset: {
            cc: true
        }
    }
);

// viii. Try finding a document with a show name that does not exist (also use language :
// “English” while finding). Set the rating and genres for it. Use the upsert option and
// check that the upserted documented has fields that are part of the filter clause, as
// well as the update clause.

// this show is not present currently...
db.shows.findOne(
    {
        language: 'English',
        name: 'Batwoman'
    }
);

// this does not find and hence no update
db.shows.updateOne(
    {
        language: 'English',
        name: 'Batwoman'
    },
    {
        $set: {
            rating: 8,
            genres: [ 'Drama', 'Action' ]
        }
    }
);

// if we don't find the document we would like to go ahead and create it...
// db.shows.insertOne(
//     {
//         language: 'English',
//         name: 'Batwoman',
//         rating: 8,
//         genres: [ 'Drama', 'Action' ]
//     }
// )

db.shows.updateOne(
    {
        language: 'English',
        name: 'Batwoman'
    },
    {
        $set: {
            rating: 8,
            genres: [ 'Drama', 'Action' ]
        }
    },
    {
        upsert: true
    }
);

// b) Array update operators - $, $push, $each, $sort, $slice, $pull, $pop, $addToSet
// These work only with array fields

// i) Update all shows that have a scheduled screening on “Monday”, and replace the
// item “Monday” with “monday” (lowercase). Hint: Use $ operator.
/**
 * { 
        schedule: {
            days: [ 'Monday', 'Tuesday' ]
        }
    }

    changes to 

    { 
        schedule: {
            days: 'monday'
        }
    }
 */
// db.shows.updateMany(
//     {
//         "schedule.days": "Monday"   
//     },
//     {
//         $set: {
//             "schedule.days": "monday"
//         }
//     }
// )

// we instead use '$' to refer to the item matched in the array schedule.days in the filtering clause
db.shows.updateMany(
    {
        "schedule.days": "Monday"   
    },
    {
        $set: {
            "schedule.days.$": "monday"
        }
    }
)


// ii) Update all shows with genre “Horror” by adding another genre “Supernatural”
db.shows.find(
    {
        genres: 'Horror'
    },
    {
        name: true,
        genres: true
    }
);

db.shows.updateMany(
    {
        genres: 'Horror'
    },
    {
        $push: {
            genres: 'Supernatural'
        }
    }
)


// iii) Update all shows with genre “Horror” by adding 2 other genres “Supernatural” and
// “Spook” (you will need to use $each). Also explore how $sort and $slice can be used
// in this case.
db.shows.find(
    {
        genres: 'Horror'
    },
    {
        name: true,
        genres: true
    }
);

db.shows.updateMany(
    {
        genres: 'Horror'
    },
    {
        $push: {
            genres: {
                $each: [ 'Supernatural', 'Spook' ]
            }
        }
    }
);


// iv) Remove the genre Supernatural from the first matching document
db.shows.findOne(
    {
        genres: 'Supernatural'
    },
    {
        name: true,
        genres: true
    }
);

db.shows.updateOne(
    {
        genres: 'Supernatural'
    },
    {
        $pull: {
            genres: 'Supernatural'
        }
    }
);


// v) Remove the last genre from every document
db.shows.find(
    {},
    {
        name: true,
        genres: true
    }
);

db.shows.updateMany(
    {},
    {
        $pop: {
            genres: 1
        }
    }
);

// vi) Add genre Supernatural to all documents of genre Horror. However the
// Supernatural genre should not be added if it already exists as a genre in the
// document.
db.shows.find(
    { genres: 'Horror' },
    { name: true, genres: true }
);

db.shows.updateMany(
    { genres: 'Horror' },
    {
        $addToSet: {
            genres: 'Supernatural'
        }
    }
);
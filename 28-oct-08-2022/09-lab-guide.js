// a) Using $match to get a collection with a filtered set of documents
// i) Find all shows that have Drama as a genre
// We pass an array of objects to the aggregate() function
// Every object represents "a single step" in the aggregation process 
db.shows.aggregate(
    [
        {
            $match: {
                genres: 'Drama'
            }
        }
    ]
);

// ii) Find all shows on HBO
// exercise



// b) Using $group to group documents by field values and produce a new collection
// representing groups

// i) Group shows by the name of network they are running on, and also find the number
// of shows in each network
db.shows.aggregate(
    [
        {
            $group: {
                _id: '$network.name', // _id should be the grouping field(s)
                numShows: {
                    $count: {} // we count the number of documents in the group
                }
            }
        }
    ]
)

// ii) Group shows by name of network and country they are running in, and also find the
// number of shows, and average runtime of shows in each group (network+country
// combination)
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    networkName: "$network.name",
                    country: "$network.country.name"
                },
                numShows: {
                    $count: {}
                },
                avgRuntime: {
                    $avg: '$runtime'
                }
            }
        }
    ]
)

// iii) Repeat the above query but create a new field called “stats” in the output
// documents. The “stats” field should have number of shows, and average runtime of
// shows for the group.


// iv) Just like we can transform document to form new fields with subdocuments while
// projecting, we can also create a new array. Using the $push operator in $group stage,
// we can create a new array with one item per document in the group! This is a special
// feature of MongoDB with no equivalent in SQL (you can calculate only aggregate
// values like sum, average etc. there). Repeat the above exercise, and create an
// additional field “names” that is an array of names of all shows in the group.
// v) Select all shows that are in English (“language” value), and then group them by their
// type. The output should have the names of the group in the type field, along with
// the number of shows in each group.


// c) Using $match to filter grouped documents
// SQL has a WHERE clause to filter records before grouping, and a HAVING clause
// after grouping (which filters the grouped records based on some aggregate value
// usually). In MongoDB, $match fulfils both these requirements.
// i) Repeat the exercise grouping shows by network name and country. The final results
// should show only the grouped documents of networks that have at least 5 shows.
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    networkName: "$network.name",
                    country: "$network.country.name"
                },
                numShows: {
                    $count: {}
                },
                avgRuntime: {
                    $avg: '$runtime'
                }
            }
        },
        {
            $match: {
                numShows: {
                    $gte: 5
                }
            }
        },
        {
            $sort: {
                "_id.networkName": 1
            }
        },
        {
            $out: {
                db: 'showsDB',
                coll: 'network-country-shows-report'
            }
        }
    ]
)



// ii) Repeat the same but show only groups with average runtime at less than 50.
// d) Using $sort to sort documents
// i) Group shows by name of network and country they are running in, and also find the
// number of shows, and average runtime of shows in each group (network+country
// combination). Now sort them by the number of shows (group with highest number
// of shows appears first). If 2 networks are tied on number of shows, the one with the
// lower average runtime appears first.
// ii) Repeat the above exercise, but make sure groups are formed only on shows that are
// “Running”
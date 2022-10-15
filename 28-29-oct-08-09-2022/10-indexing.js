db.shows.find({ weight: { $gt: 90 } });

// COLLSCAN -> Collection scan
db.shows.explain().find({ weight: { $gt: 90 } });

// Sorted list of pointers to documents (sorted based on some field that you choose)

// Building and using indexes is a 3-step process
// 1. Build the index based on field(s) (slow process, one-time process)
// 2. A query based on these field(s) shall be faster
// 3. When inserts, updates, or delete are made on the collection, the index may need to be updated

// Disadvantage of indexes
// 1. Too many indexes will slow down inserts, updates and deletes
// 2. The index data can take up significant space especially when we have many indexes on a collection

db.shows.explain().find( { _id: ObjectId( "6341ad2e5abff9bb934571fc" ) } )

db.shows.explain( "executionStats" ).find({ weight: { $gt: 90 } });
db.shows.explain( "executionStats" ).find( { _id: ObjectId( "6341ad2e5abff9bb934571fc" ) } )

// Observe the number of documents examined - it is 1 in case of id-based query

// Creating an index
// first argument is the fields to index by
// second has options like name of the index
db.shows.createIndex(
    {
        weight: 1
    },
    {
        name: 'idx-weight'
    }
);

// Now try...You will find a different plan instead of COLLSCAN. It chose IXSCAN and examined fewer than 240 documents.
db.shows.explain( "executionStats" ).find({ weight: { $gt: 90 } });

// query by multiple fields
db.shows.explain( "executionStats" ).find(
    {
        weight: {
            $gt: 90
        },
        "rating.average": {
            $gt: 7
        }
    }
);

// We can build an index based on both weight and rating average (the order in whcih the fields are specified matters here - first weight, then rating average)
db.shows.createIndex(
    {
        weight: 1,
        "rating.average": 1
    },
    {
        name: 'idx-weight-rating'
    }
);

// Does a collection scan. The index created above considered rating average as a secondary field. Do queries based on rating average alone cannot make use of the above index.
db.shows.explain( "executionStats" ).find(
    {
        "rating.average": {
            $gt: 7
        }
    }
);

db.shows.dropIndex( 'idx-weight' );

// This is still able to make use of the idx-weight-rating to speed up query
db.shows.explain( "executionStats" ).find({ weight: { $gt: 90 } });


// Unique index - A special index on a field which is guaranteed to have unique value
db.shows.createIndex(
    {
        name: 1,
        "network.country.name": 1
    },
    {
        name: 'idx-name',
        unique: true
    }
)

// You can build exactly 1 Text Index for a collection (this is the index useful for text-based queries - i.e. searching through a knowledge base)
db.shows.createIndex(
    {
        name: "text",
        type: "text",
        language: "text",
        "network.name": "text",
        "network.country.name": "text",
        summary: "text"
    },
    {
        language_override: 'en'
    }
);

db.shows.find(
    {
        $text: {
            $search: 'last'
        }
    }
)

// last should be present
// man should not be present
db.shows.find(
    {
        $text: {
            $search: 'last -man'
        }
    }
)

db.shows
    .find(
        {
            $text: {
                $search: 'last -man'
            }
        }
    )
    .sort(
        {
            score: {
                $meta: "textScore"
            }
        }
    )
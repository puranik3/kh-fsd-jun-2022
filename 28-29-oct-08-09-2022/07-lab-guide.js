// sort(), skip() and limit() are called on cursors and also return cursors. The shell iterates
// through the cursor that is finally returned from the chain of calls to these methods – The
// order of the calls hence DOES NOT affect the results.

// i) Retrieve all shows and sort by rating – first ascending and then descending (2 queries)
// {} -> since we are NOT filtering
// In sorting: 1 -> ascending order, -1 -> descending order
// The find() method returns a "cursor" -> The cursor helps retrieve the results and NOT the actual results
db.shows
        .find(
            {
                "rating.average": {
                    $type: 'number'
                }
            },
            {
                name: true,
                rating: true
            }
        )
        .sort(
            {
                "rating.average": 1
            }
        );

// Detour: If we have to get the results using the cursor object, how do we do so?
const cursor = db.shows
                    .find(
                        {
                            "rating.average": {
                                $type: 'number'
                            }
                        },
                        {
                            name: true,
                            rating: true
                        }
                    );
cursor.hasNext(); // true -> there is some result that is not viewed yet
cursor2.next(); // gets the next result
cursor2.next(); // gets the next result
cursor2.next(); // gets the next result
cursor2.next(); // gets the next result

// ii) Retrieve all shows and sort by rating first, and runtime when ratings are the same
db.shows
    .find(
        {},
        {
            name: true,
            runtime: true,
            "rating.average": true
        }
    )
    .sort(
        {
            "rating.average": -1,
            runtime: 1
        }
    );

// iii) Retrieve all shows and sort by rating first, and runtime when ratings are the same.
// This time skip 20 documents and retrieve only 10 documents.
// We shall retrieve documents 21 - 30
db.shows
    .find(
        {},
        {
            name: true,
            runtime: true,
            "rating.average": true
        }
    )
    .sort(
        {
            "rating.average": -1,
            runtime: 1
        }
    )
    .skip( 20 )
    .limit( 10 )
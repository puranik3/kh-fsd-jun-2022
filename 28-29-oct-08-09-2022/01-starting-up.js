// in mongosh within COmpass...
// switch over to the DB you want to work with
use storeDB

// check if you switched over successfully
db // displays the name of the DB in use

// CRUD operations - Create (insert), Read (find), Update, Delete

// insert 1 document into a "products" collection
db.products.insertOne({
    name: 'Samsung Galaxy Note',
    price: 800,
    color: [ 'silver', 'red', 'white', 'gray' ],
    size: [ '8 inch', '11 inch' ],
    specs: {
        ram: '8 GB',
        disk: '1 TB'
    }
})

db.products.insertOne({
    name: 'Nikon Camera',
    price: 600,
    color: [ 'silver', 'red', 'white', 'gray' ],
    lenses: [
        {
            focalLength: '5 m'
        },
        {
            focalLength: '50 m'
        }
    ]
})

// clear screen
cls

db.products.insertMany(
    [
        {
            name: 'Apple iPad',
            price: 700,
            color: [ 'silver', 'blue', 'rose' ],
            size: [ '8 inch', '10 inch' ]
        },
        {
            name: 'Belkin Router',
            price: 100,
            color: [ 'black', 'white' ],
            bands: [ '5GHz', '2.4 GHz' ]
        }
    ]
)

// query ALL products
db.products.find()

db.products.find({
    name: 'Nikon Camera'
})

// you can match for an item within a "multi-valued" (array) attribute
db.products.find({
    color: 'white'
})

// match multiple criteria
db.products.find({
    color: 'white',
    price: 100
})

// match nested object properties
db.products.find({
    'specs.ram': "8 GB"
})

// using operators
db.products.find({
    price: {
        $lte: 650
    }
})

db.products.find(
    {
        price: {
            $lte: 650
        }
    },
    {
        name: true,
        price: true
    }
)

db.products.find({
    price: {
        $gte: 500,
        $lte: 650
    }
})

// updates
db.products.updateOne(
    {
        _id: ObjectId( "634195e05abff9bb934571f8" )
    },
    {
        $set: {
            price: 850
        }
    }
)

db.products.updateOne(
    {
        _id: ObjectId( "634195e05abff9bb934571f8" )
    },
    {
        $set: {
            price: 900,
            "specs.ram": "16 GB"
        }
    }
)

db.products.updateOne(
    {
        name: 'Belkin Router'
    },
    {
        $unset: {
            color: true
        }
    }
)

db.products.updateOne(
    {
        _id: ObjectId( "634195e05abff9bb934571f8" )
    },
    {
        $inc: {
            price: 100
        }
    }
)

db.products.updateOne(
    {
        _id: ObjectId( "634195e05abff9bb934571f8" )
    },
    {
        $inc: {
            price: 100
        },
        $set: {
            rating: 4.5
        }
    }
)

// regular expression based matching
db.products.find({
    name: /Galaxy/i
})

// select all products priced >= 600 and decrease price by 100
db.products.updateMany(
    {
        price: {
            $gte: 600
        }
    },
    {
        $inc: {
            price: -100
        }
    }
);

db.products.deleteOne(
    {
        _id: ObjectId( "634195e05abff9bb934571f8" )
    }
);
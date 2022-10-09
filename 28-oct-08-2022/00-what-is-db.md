## What is a Database Management System (DBMS)?
- A software that sepcializes in storing and retrieving data
    - They store, retrieve and manipulate data very efficiently
- "Database"
    - A collection of entities for an application
        - A store database (DB) - Users, Products, Transactions, Orders, ShoppingCart will be the tables/collextions
- Two main types. Let's say we are building an online store
    - Relational DBMS - we store data in the form of tables
        - Uses Structured Query Language (SQL) for querying data
        - Relation means "tables" and their relationships
        - Decide the entities : Users, Products, Transactions, Orders, ShoppingCart
        - For every entity you will have at least 1 table
            - User table
                - A "row" in a table represents one instance of the entity
        - Every row has a fixed schema (same set of fields)
        - MySQL, Microsoft SQL, Oracle SQL, PostGres
    - Non-relational DBMS (NoSQL)
        - These do not store data in the form of tables
        - In the last few years, these DBs have become more popular
            - Speed: They are faster then RDBMS
        - Document DB is one variety of NoSQL DB
            - MongoDB is a document DB
                - Uses JS for querying!
                - A document is a JS object
                - Decide the entities : Users, Products, Transactions, Orders, ShoppingCart
                - Document can have fields with "multiple values"
                - Documents need not have a fixed schema (they can have different set of fields)
                - When we need user info or any other info, the DB will need to refer to fewer "collections" (equivalent of "tables" of RDBMS)
                - A "document" (row/record in RDBMS) -> {
                        name: "Oleksii",
                        date_registered: "Jan 1 2022",
                        ...,
                        shippingAddress: [
                            {
                                country: 'Canada',
                                city: 'Toronto'
                            },
                            {
                                country: 'Canada',
                                city: 'Winnipeg'
                            }
                        ]
                    }
                - A collection is a group of documents

SQL                 NoSQL
----------------------------
Database            Database
Table               Collection (Entity - eg. "user")
Row/record          Document (a particular user - eg. Dion's data)
Field/column        Field/path (eg. "name" of user)
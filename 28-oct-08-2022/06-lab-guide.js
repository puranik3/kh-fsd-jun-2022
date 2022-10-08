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


// iii. Find shows with average rating at least 8 
// iv. Find shows with rating between 8 and 9 
// v. Find shows in horror genre 
// vi. Find shows which have ONLY horror as their genre 
// b)  Special comparison operators that match within a list of values - $in, $nin (use these 
// operators in your solution) 
// i) Find shows that have one of Drama or Horror as genres in them 
// ii) Find shows that are of type Animation or Reality 
// iii) Find shows that have neither Drama nor Horror as genres in them 
// iv) Find shows that are neither of type Animation, nor Reality 
// v) Find shows that are not running on the network HBO, nor FOX
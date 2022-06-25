# Variables
- A piece of memory (8 bytes)
- Every variable has a name
- What can we store in a variable?
    - primitive types : number, string, boolean -> "data types"
        - numbers - 100, 1205, 123.456, -200
        - string - a sequence of characters - "John Doe", "New York"
        - boolean - true, false
    - non-primitives / composite types
        - [ "silver", "black" ] -> list / array
        - [ 2, 3, 4, 1, 1 ] -> list of choices made in a quiz application consisting of 5 questions
        - object -> a collection of "key-value pairs"
            - {
                name: "John Doe",
                role: "Accountant",
                age: 32,
                permanent: true,
                projects: [ "Project A", "Project B" ]
            }

## What variables will you use? (data type)
- What the user is searching for (input from a search bar)
    - string - productsSearchInput -> "Christmas bells"
- The names of products matched as a result of the search
    - matchedProducts -> list of strings - [ "Product A", "Product B", .... ]
- Is a product available? 
    - isProductAvailable -> Boolean
- How many products matched the search?
    - productCount -> number
- Details of the top search result
    - productDetail -> object

## Literals
- 1, 100, "iPhone 13", "Jane Doe", { name: "Mark", age: 40 }

## Expressions
- Let's consider some variables : pageNumber -> 2, moveAheadBy -> 3
- Some expression using these variables and some literals
    - pageNumber + 1, pageNumber + moveAheadBy, 2 + 3

## Statements -> does something useful
- Let's say you have variables result -> 10, x -> 10 , y -> 20

After this statement, the value of variable sum will be 30
result <- x + y (assignment statement)

## Operators
- +, -, * (multiplication), / (division)

## Exercise: Examples of Expressions
- 10 * 20 -> 200
- x -> 2, y -> 3, z

## Exercise: Examples of Statements
- z <- x * y;
- Assign the sum of squares of x and y and assign it to z
    - z <- x * x + y * y

## I/O statements
- INPUT x (Prompt the user to give some value, and assign that user input to variable x)
- OUTPUT x (Convey the result to the user)

## Assignment statements
- x <- 10 (initialization if its the first time the variable is used / assignment if its not the first time)
- x <- y + z
- x <- y + 100
- x <- true
- x <- "Hello, world"
- x <- y (copy the value held by variable y to x)
- x <- [ "john", 'jane', 'mark' ] (assining a list to the variable x)

## Working with lists
- searchResults <- [ 'iPhone 13', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 12 Pro' ]
- searchResults[0] -> the list item at index 0 ('iPhone13')
- searchResults[3] -> the list item at index 3 ('iPhone 12 Pro')
- searchResults.length -> 4 (number of items in the list)
- searchResults.length - 1 will be the last item's index

## Assigning list items
- searchResults <- [ 'iPhone 13', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 12 Pro' ]
    - searchResults[1] <- 'iPhone Thirteen PRO'
    [ 'iPhone 13', 'iPhone Thirteen PRO', 'iPhone 13 Pro Max', 'iPhone 12 Pro' ]
- numbers <- [ 2, 4, 6, 8, 10 ]
    - numbers[1] <- numbers[2] + numbers[3]
    [ 2, 14, 6, 8, 10 ]
    - numbers[1] <- numbers[1] + 10
    [ 2, 24, 6, 8, 10 ]

## Working with list indexes
- idx <- 1
- searchItems <- [ 'iPhone 13', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 12 Pro' ]
- searchItems[idx] -> 'iPhone 13 Pro'
- idx <- idx + 1 (2)
- searchItems[idx] -> 'iPhone 13 Pro Max'
- idx <- idx + 1 (3)
- searchItems[idx] -> 'iPhone 12 Pro'
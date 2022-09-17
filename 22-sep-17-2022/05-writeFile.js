const fs = require( 'fs' );

const todoList = 
`<!doctype html>
<html lang="en">
    <head>
        <title>Todo list</title>
    </head>
    <body>
        <h1>Things to do...</h1>
        1. Learn more about fs module
        2. Fix the closet
        3. Prepare good Sunday meal
    </body>
</html>
`;

fs.writeFile( './todo-list.html', todoList, { encoding: 'utf-8'/*, flag: 'a'*/ }, ( error ) => {
    if( error ) {
        console.log( error.message );
    } else {
        console.log( 'File created successfully' );
    }
});
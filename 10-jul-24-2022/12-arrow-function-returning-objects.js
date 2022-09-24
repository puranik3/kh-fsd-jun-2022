// const getPerson = () => {
//     return {
//         name: 'John',
//         age: 32
//     }
// };

// this is same as above
const getPerson = () => ({
    name: 'John',
    age: 32
});

console.log( getPerson() );
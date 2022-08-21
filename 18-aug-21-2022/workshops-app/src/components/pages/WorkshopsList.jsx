// "hooks" - functions that can be used ONLY in function components (each hooks adds some functionality to function components that were earlier available ONLY in class components)
import { useState, useEffect } from 'react';

const WorkshopsList = ( { sm, lg } ) => {
    // an array with 2 items
    // const x = useState( true );
    // console.log( x );
    // console.log( x[0] ); // true
    // console.log( x[1] ); // function that helps change the value

    // set up and use state
    const [ loading, setLoading ] = useState( true );
    const [ workshops, setWorkshops ] = useState( [] );
    const [ error, setError ] = useState( null );

    // if the dependency array is an empty array, the side-effect executes only after the first render (similar to using componentDidMount in a class component)
    useEffect(
        () => {
            console.log( 'first render' );
        },
        [] // dependency array
    );

    console.log( 'render' );

    return (
        <div>
            <h1 className="my-3">List of Workshops</h1>
            <hr />
            {
                <div>Fetching list of workshops. Please wait...</div>
            }
        </div>
    );
};

export default WorkshopsList;
// "hooks" - functions that can be used ONLY in function components (each hooks adds some functionality to function components that were earlier available ONLY in class components)
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

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
    const [ page, setPage ] = useState( 1 );

    // if the dependency array is an empty array, the side-effect executes only after the first render (similar to using componentDidMount in a class component)
    useEffect(
        () => {
            console.log( 'i run only after the first render' );
        },
        []
    );

    // runs only after the first render, AND page change (any of the dependency array variables change)
    useEffect(
        () => {
            console.log( 'after first render AND page change' );

            axios
                .get(`http://workshops-server.herokuapp.com/workshops?_page=${page}`)
                .then(
                    (response) => {
                        const workshops = response.data;

                        // update the state using the appropriate setters
                        setLoading( false );
                        setWorkshops( workshops );
                    }
                )
                .catch((error) => {
                    setLoading( false );
                    setError( error );
                });
        },
        [ page ] // dependency array
    );

    // no array - executes after every render (componentDidMount + componentDidUpdate rolled into one)
    useEffect(
        () => {
            console.log( 'i execute after every render' );
        }
    );

    console.log( 'render' );

    const onNextPage = ( event ) => {
        console.log( event );
        console.log( 'button was clicked' );
        setPage( page + 1 );
    };

    const deleteWorkshop = ( event, workshop ) => {
        console.log( workshop );

        // EXERCISE: You can use confirm() to show a confirmation dialog. Based on what it returns (true on OK/false on Cancel) decide if you want to go ahead with the Ajax request

        axios.delete( `http://workshops-server.herokuapp.com/workshops/${workshop.id}` )
            .then(
                ( response ) => {
                    alert( 'Deleted the workshop' );

                    // form a new array which does not have ONLY the workshop that was deleted
                    const newWorkshops = workshops.filter(
                        w => {
                            return w.id !== workshop.id // true for every workshop w, except the one deleted
                        }
                    );
                    setWorkshops( newWorkshops );
                }
            )
            .catch(
                ( error ) => {
                    alert( 'Unable to delete. Try again later.' );
                }
            );
    };

    return (
        <div>
            <h1 className="my-3">List of Workshops</h1>
            <hr />
            <div className="my-3">
                <button className="btn btn-dark btn-sm me-2" onClick={onNextPage}>Next page</button>
                <small>You are viewing page {page}</small>
            </div>
            {
                loading === true && (
                    <div>Fetching list of workshops. Please wait...</div>
                )
            }
            {loading === false && error === null && (
                <div className="row">
                    {
                        workshops.map((workshop) => (
                            <div className={`col-12 col-sm-${sm} col-lg-${lg} d-flex mb-3`}>
                                <div className="card p-4 w-100">
                                    <img
                                        src={workshop.imageUrl}
                                        className="card-img-top"
                                        alt={workshop.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{workshop.name}</h5>
                                        <Link to={"/workshops/" + workshop.id} className="btn btn-primary">
                                            Know more
                                        </Link>
                                        <button
                                            className="btn btn-danger ms-2"
                                            onClick={( event ) => deleteWorkshop( event, workshop )}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
            {loading === false && error !== null && (
                <div>{error.message}</div>
            )}
        </div>
    );
};

export default WorkshopsList;
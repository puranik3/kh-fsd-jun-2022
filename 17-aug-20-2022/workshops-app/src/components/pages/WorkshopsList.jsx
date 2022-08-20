import { Component } from 'react';

/** Component using class */
class WorkshopsList extends Component {
    render() {
        return (
            <div>
                <h1>List of Workshops</h1>
                <hr />
                <div>Fetching list of workshops. Please wait...</div>
            </div>
        );
    }

    // side-effect
    // useEffect() is the equivalent in function component
    // executes as soon as the component shows up
    componentDidMount() {
        fetch( `http://workshops-server.herokuapp.com/workshops` )
            .then(
                function( response ) {
                    return response.json();
                }
            )
            .then(
                function( workshops ) {
                    console.log( workshops );
                }
            )
            .catch(
                function( error ) {
                    alert( error.message );
                }
            )
    }
};

export default WorkshopsList;
import { Component } from 'react';

/** Component using class */
class WorkshopsList extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            loading: true,
            workshops: []
        };
    }

    render() {
        return (
            <div>
                <h1>List of Workshops</h1>
                <hr />
                <div>Fetching list of workshops. Please wait...</div>
            </div>
        );
    }

    // "side-effect"
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
                ( workshops ) => {
                    console.log( workshops );
                    
                    // update the state using setState() method
                    this.setState({
                        loading: false,
                        workshops: workshops
                    });
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
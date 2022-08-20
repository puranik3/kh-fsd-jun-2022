import { Component } from 'react';
import axios from 'axios';

/** Component using class */
class WorkshopsList extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            loading: true,
            workshops: [],
            error: null
        };
    }

    render() {
        const { loading, workshops, error } = this.state;

        return (
            <div>
                <h1>List of Workshops</h1>
                <hr />
                {/* conditional rendering using ? : operator */}
                {
                    /*
                    this.state.loading === true
                    ? 
                    (
                        <div>Fetching list of workshops. Please wait...</div>
                    )
                    :
                    (
                        this.state.workshops.map(
                            workshop => (
                                <div>{workshop.name}</div>
                            )
                        )
                    )
                    */
                }
                {
                    loading === true && (
                        <div>Fetching list of workshops. Please wait...</div>
                    )
                }
                {
                    loading === false && error === null && (
                        workshops.map(
                            workshop => (
                                <div>{workshop.name}</div>
                            )
                        )
                    )
                }
                {
                    loading === false && error !== null && (
                        <div>{error.message}</div>
                    )
                }
            </div>
        );
    }

    // "side-effect"
    // useEffect() is the equivalent in function component
    // executes as soon as the component shows up
    componentDidMount() {
        axios.get( `http://workshops-server.herokuapp.com/workshops` )
            .then(
                // NOTE: important to use () => {} function here (else the "this" is not set correctly)
                ( response ) => {
                    const workshops = response.data;
                    console.log( workshops );
                    
                    // update the state using setState() method
                    this.setState({
                        loading: false,
                        workshops: workshops
                    });
                }
            )
            .catch(
                ( error ) => {
                    this.setState({
                        loading: false,
                        error: error
                    });
                }
            )
    }
};

export default WorkshopsList;
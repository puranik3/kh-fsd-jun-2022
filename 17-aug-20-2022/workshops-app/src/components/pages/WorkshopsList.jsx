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
        const { loading, workshops } = this.state;

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
                    loading === false && (
                        this.state.workshops.map(
                            workshop => (
                                <div>{workshop.name}</div>
                            )
                        )
                    )
                }
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
                // NOTE: important to use () => {} function here (else the "this" is not set correctly)
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
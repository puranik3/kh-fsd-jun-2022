import React, { Component } from "react";
import axios from "axios";

/** Component using class */
class WorkshopsList extends Component {
    constructor(props) {
        super(props); // this.props = props;

        this.state = {
            loading: true,
            workshops: [],
            error: null,
        };
    }

    render() {
        const { loading, workshops, error } = this.state;
        
        console.log( this.props ); // { sm: 6, lg: 4 }
        const { sm, lg } = this.props;

        return (
            <div>
                <h1 className="my-3">List of Workshops</h1>
                <hr />
                {/* conditional rendering using ? : operator */}
                {/*
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
                    */}
                {loading === true && (
                    <div>Fetching list of workshops. Please wait...</div>
                )}
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
                                            <a href="/" className="btn btn-primary">
                                                Know more
                                            </a>
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
    }

    // "side-effect"
    // useEffect() is the equivalent in function component
    // executes as soon as the component shows up
    componentDidMount() {
        axios
            .get(`http://workshops-server.herokuapp.com/workshops`)
            .then(
                // NOTE: important to use () => {} function here (else the "this" is not set correctly)
                (response) => {
                    const workshops = response.data;
                    console.log(workshops);

                    // update the state using setState() method
                    this.setState({
                        loading: false,
                        workshops: workshops,
                    });
                }
            )
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: error,
                });
            });
    }

    // after state / props change, and there is a render...
    componentDidUpdate() {
        console.log( 'componentDidUpdate' );
    }

    // before the component leaves the screen
    componentWillUnmount() {
        console.log( 'componentWillUnmount' );
    }
}

export default WorkshopsList;

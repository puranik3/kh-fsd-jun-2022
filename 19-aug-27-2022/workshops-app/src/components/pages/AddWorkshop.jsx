import axios from 'axios';
import { useRef, useState } from 'react';

const AddWorkshop = () => {
    const nameRef = useRef();
    const imageUrlRef = useRef();

    const [ nameError, setNameError ] = useState( '' );

    const validateName = () => {
        const name = nameRef.current.value;

        if( name === '' ) {
            setNameError( 'Name is required' );
        } else {
            setNameError( '' );
        }
    };

    const addWorkshop = ( event ) => {
        event.preventDefault(); // Hey browser! Do not do anything

        const workshop = {
            name: nameRef.current.value,
            imageUrl: imageUrlRef.current.value
        }

        console.log( workshop );

        axios.post( `https://workshops-server.herokuapp.com/workshops`, workshop, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(
                function( response ) {
                    alert( 'Workshop added' );
                }
            )
            .catch(
                function( error ) {
                    alert( error.message );
                }
            );
    };

    return (
        <div className="my-3">
            <h1>Add a workshop</h1>
            <hr />
            <form onSubmit={addWorkshop}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        ref={nameRef}
                        onChange={validateName}
                    />
                    <div>
                        <small className="text-danger">{nameError}</small>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                    <input
                        type="url"
                        className="form-control"
                        id="imageUrl"
                        placeholder="https://www.example.com/logo"
                        ref={imageUrlRef}
                    />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Add a workshop</button>
                </div>
            </form>
        </div>
    );
};

export default AddWorkshop;
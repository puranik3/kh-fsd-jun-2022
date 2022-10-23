import React, { useState } from 'react'

const AddContact = ( { addContact } ) => {
    const [ name, setName ] = useState( '' );
    const [ number, setNumber ] = useState( '' );

    const addContactHandler = ( event ) => {
        event.preventDefault();
        
        addContact( name, number );

        setName( '' );
        setNumber( '' );
    }
  
    return (
      <form onSubmit={addContactHandler}>
          <div className="form-group row">
              <div className="col-6 col-md-4 my-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
              </div>
              <div className="col-6 col-md-4 my-2">
                  <label htmlFor="tel">Phone number</label>
                  <input type="tel" name="tel" id="tel" placeholder="+001-1234567890" className="form-control" 
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required />
              </div>
              <div className="col-12 col-md-4 d-flex my-2">
                  <input type="submit" value="Add" className="btn btn-primary btn-block align-self-end"  />
              </div>
          </div>
      </form>
    );
}

export default AddContact;

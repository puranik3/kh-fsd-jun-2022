import React, { useState } from 'react';

const ContactCard = ({ contact, editContact, deleteContact }) => {
    const { name, number, id } = contact;
    const [newName, setNewName] = useState(name);
    const [newNumber, setNewNumber] = useState(number);
    const [editMode, setEditMode] = useState(false);

    const editContactHandler = () => {
        editContact({
            id,
            name: newName,
            number: newNumber,
        });

        setEditMode(false);
    };

    return editMode ? (
        <div className="card p-3 w-100 d-flex flex-column justify-content-between">
            <label htmlFor="name">
                <small>Name</small>
            </label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="form-control mb-3"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                required
            />

            <label htmlFor="phone-number">
                <small>Phone number</small>
            </label>
            <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="+001-1234567890"
                className="form-control mb-3"
                value={newNumber}
                onChange={(event) => setNewNumber(event.target.value)}
                required
            />

            <button
                className="btn btn-danger btn-sm mt-2"
                onClick={() => setEditMode(!editMode)}
            >
                Cancel
            </button>
            <button
                className="btn btn-primary btn-sm mt-2"
                onClick={editContactHandler}
            >
                Save
            </button>
        </div>
    ) : (
        <div className="card p-3 w-100 d-flex flex-column justify-content-between">
            <div>
                <h3 className="h5">{name}</h3>
                <p>{number}</p>
            </div>
            <div className="d-flex justify-content-end action-buttons">
                <button
                    className="btn btn-primary btn-sm mx-2 px-3"
                    onClick={() => setEditMode((editMode) => !editMode)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger btn-sm px-3"
                    onClick={() => deleteContact(contact)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;

import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';
import ContactCard from './ContactCard';

import ContactsService from '../services/contacts';

import './App.css';

const App = () => {
    const [contacts, setContacts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        ContactsService.get()
            .then(setContacts)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    const addContact = (name, number) => {
        ContactsService.post({ name, number })
            .then((contact) =>
                setContacts((contacts) => [...contacts, contact])
            )
            .catch((error) => console.log(error.message));
    };

    const editContact = (contact) => {
        ContactsService.put(contact)
            .then((contact) =>
                setContacts((contacts) =>
                    contacts.map((c) => (c.id === contact.id ? contact : c))
                )
            )
            .catch((error) => console.log(error.message));
    };

    const deleteContact = (contact) => {
        ContactsService.delete(contact.id)
            .then(() =>
                setContacts((contacts) =>
                    contacts.filter((c) => c.id !== contact.id)
                )
            )
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="container my-4">
            <h1>Phone Book</h1>
            <hr />
            {loading && (
                <div className="alert alert-info" id="fetching-contacts" data-testid="fetching-contacts">
                    Contacts are being fetched
                </div>
            )}
            {!loading && error && (
                <div
                    className="alert alert-danger"
                    id="error-fetching-contacts"
                    data-testid="error-fetching-contacts"
                >
                    {error.message}
                </div>
            )}
            {!loading && contacts && (
                <>
                    <AddContact addContact={addContact} />
                    <div className="row d-flex align-items-stretch">
                        {contacts.map((contact) => (
                            <div
                                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch my-3"
                                key={contact.id}
                            >
                                <ContactCard
                                    contact={contact}
                                    editContact={editContact}
                                    deleteContact={deleteContact}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default App;

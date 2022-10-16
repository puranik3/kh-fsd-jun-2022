import App from './App';

import { getDefaultNormalizer, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { errorHandlers } from '../mocks/handlers';
import server from '../mocks/server';

describe( 'App component on load', () => {
    test( 'shows the loading message', () => {
        render( <App /> );

        // const loadingMessage = screen.getByText( /Contacts are being fetched/i );
        const loadingMessage = screen.getByTestId( 'fetching-contacts' );

        expect( loadingMessage ).toBeInTheDocument();
    });

    test( 'shows contacts after fetching them from the backend', async () => {
        render( <App /> );

        const contact1 = await screen.findByText( /John Doe/i );
        expect( contact1 ).toBeInTheDocument();
        
        const contact2 = await screen.findByText( /Jane Doe/i );
        expect( contact2 ).toBeInTheDocument();

        // Use queryBy* if you expect some element to NOT be in the document
        const loadingMessage = screen.queryByTestId( 'fetching-contacts' );
        expect( loadingMessage ).not.toBeInTheDocument();
    });
    
    test( 'shows error message if the call to the backend results in an error', async () => {
        server.use( ...errorHandlers );

        render( <App /> );

        const errorMessage = await screen.findByTestId( 'error-fetching-contacts' );
        expect( errorMessage ).toBeInTheDocument();

        const loadingMessage = screen.queryByTestId( 'fetching-contacts' );
        expect( loadingMessage ).not.toBeInTheDocument();
    });
});

test( 'App should add a new contact', async () => {
    render( <App /> );

    // We prefer using label text / role based query methods
    const nameInput = await screen.findByLabelText( /Name/i );
    const phoneInput = await screen.findByLabelText( /Phone number/i );

    const button = await screen.findByRole( 'button', { name: 'Add' } );

    const newContact = {
        name: 'Mark Smith',
        phoneNumber: '+001-3456789012'
    };

    userEvent.clear( nameInput );
    userEvent.clear( phoneInput );

    userEvent.type( nameInput, newContact.name );
    userEvent.type( phoneInput, newContact.phoneNumber );

    userEvent.click( button );

    const contactNameEl = await screen.findByText( newContact.name );
    const phoneEl = await screen.findByText( newContact.phoneNumber );

    expect( contactNameEl ).toBeInTheDocument();
    expect( phoneEl ).toBeInTheDocument();
});
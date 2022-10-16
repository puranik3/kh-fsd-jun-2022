import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
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
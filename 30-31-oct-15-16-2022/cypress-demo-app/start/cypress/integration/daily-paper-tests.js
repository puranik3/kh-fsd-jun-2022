describe( 'basic tests', () => {
    // the function passed to before runs BEFORE EVERY test in this group of tests
    before(() => {
        cy.visit( 'http://localhost:3000' );
        // expect( 1 + 1 ).to.equal( 2 );
    });

    it( 'title is right', () => {
        // const title = window.title;
        cy.get( '.heading' ).invoke( 'text' ).should( 'equal', 'The Daily Paper' );
    });

    it( 'shows the number of characters remaining in search field', () => {
        // gets the first match - which is the search input
        cy.get( 'input' ).type( 'business' );
        cy.get( '.remainingCharacters' ).invoke( 'text' ).should( 'equal', '7' );
    });

    it( 'should fetch the news articles', () => {
        cy.get( 'select' ).select( 'us' );
        cy.get( 'input' ).invoke( 'val', '' );
        cy.get( 'input' ).type( 'sports' );

        cy.intercept( 'GET', 'http://newsapi.org/v2/top-headlines?country=us&q=sports&apiKey=dd753c62a5054b788413176f718ead50', {
            fixture: 'top-headlines.json'
        });

        cy.get( 'button' ).click();

        cy.screenshot();

        cy.get( '.card' ).should( 'have.length', 10 );
    });
});
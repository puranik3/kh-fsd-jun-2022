describe('Accessing Elements', () => {
  it('placeholder of the input box should match', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input').invoke('attr', 'placeholder').should('equal', 'Search here');
  });
});

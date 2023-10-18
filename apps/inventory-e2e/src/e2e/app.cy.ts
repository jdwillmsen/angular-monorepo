describe('inventory', () => {
  beforeEach(() => cy.visit('/'));

  it('should be setup properly', () => {
    cy.contains('product-list works!');
    cy.contains('prices works!');
  });
});

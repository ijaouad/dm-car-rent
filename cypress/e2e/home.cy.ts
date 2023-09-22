describe('template spec', () => {  
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it.only('should search for car', () => {
    cy.get('[data-cy="search-car-input"]').type("tesla{enter}")
  })

  it('should add car to wishlist', () => {
    cy.get('[data-cy="add-to-wishlist"]').click()
  });
  
  it('should remove car from wishlist', () => {
    cy.get('[data-cy="remove-from-wishlist"]').click()
  });

  it('should navigate to car details page', () => {
    cy.get(':nth-child(2) > .car-card > .car-link').click({force: true})
  });




})
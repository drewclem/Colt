describe('Contribute', function() {
  it('should render', function() {
    cy.visit('http://localhost:3000/contribute')
    cy.contains('Contribute')
  })
})
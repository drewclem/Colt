describe('Homepage render', function() {
  it('should render', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Gain real-world experience')
  })
})
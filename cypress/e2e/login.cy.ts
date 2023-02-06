describe('template spec', () => {
  beforeEach(() => {
  })
  it('passes', () => {
    cy.login()
    cy.get('#userName-value').should('contain', 'ibrian93') 
  })
})

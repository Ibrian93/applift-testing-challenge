import './commands'


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('login', () => {
    cy.visit('/login')
    cy.get('#userName').type('ibrian93')
    cy.get('#password').type('MyTesting83!')
    cy.get('#login').click()
})

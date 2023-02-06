import './commands'


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('login', (username, password) => {
    cy.get('').type(username)
    cy.get('').type(password)
    cy.get().click()
})

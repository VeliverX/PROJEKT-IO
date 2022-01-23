

describe('Navigation', () => {
  it('should navigate to the main page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="strona_glowna"]').click()
    cy.url().should('include', '/strona_glowna')
    cy.get('h3').contains('Jak to działa')
  })
  it('should show nav bar', () => {
    cy.visit('http://localhost:3000/strona_glowna')
    cy.get('#przycisk').click()
    cy.get('#menu').should('be.visible')
  })
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/strona_glowna')
    cy.get('#przycisk').click()
    cy.get('#menu').should('be.visible')
    cy.get('#porom').click()
    cy.url().should('include', '/promocje')
    cy.get('h1').contains('Döner Kebab')
  })
})

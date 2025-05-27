/// <reference types="cypress" />

describe('Simple test app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays two todo items by default', () => {
    cy.get('input.App-input').type('Buy groceries')
    cy.get('button.App-link').click()
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Button clicked with input: Buy groceries')
    })
  })
})

/// <reference types="cypress" />

describe('Simple test app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.fixture('simple-test.json').as('simpleTestData')
  })

  it('displays two todo items by default', () => {

    cy.get('@simpleTestData').then((testData) => {

      cy.get('input.App-input').type(testData.inputValue)
  
      cy.get('button.App-link').click()
  
      cy.on('window:alert', (text) => {
        expect(text).to.contains(testData.alertMessage)
      })
      
    })

  })
})

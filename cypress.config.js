const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: ["**/*.feature", "**/*.cy.js"],
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  },
});

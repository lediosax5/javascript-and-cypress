const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/suits/*.{js,feature}",
    baseUrl: 'https://opencart.abstracta.us/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
  },
  defaultCommandTimeout: 9000,
});

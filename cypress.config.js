const { defineConfig } = require("cypress");
const testData = require("./cypress/fixtures/testData.json");

module.exports = defineConfig({
  e2e: {
    baseUrl: testData.dev.baseUrl,
    chromeWebSecurity: false,
  },
});

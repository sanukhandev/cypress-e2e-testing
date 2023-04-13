const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      reportDir: 'cypress/results',
      reportFilename: '[name].html',
      overwrite: true,
      html: true,
      json: false,
    },
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  video: true,
  screenshots: true,
  e2e: {
    baseUrl: "https://ngtest.aosuat.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

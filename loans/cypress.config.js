const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: 0,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

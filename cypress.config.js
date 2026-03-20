const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: "mochawesome",

  e2e: {
    defaultCommandTimeout: 80000,
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    screenshotOnRunFailure: true,
    pageLoadTimeout: 70000,
    retries: {
      runMode: 2,
      openMode: 0,
    },

    setupNodeEvents(on, config) {
      require("@shelex/cypress-allure-plugin/writer")(on, config);
      return config;
    },
  },
});

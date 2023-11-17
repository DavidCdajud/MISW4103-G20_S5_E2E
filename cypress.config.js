const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // video: true,
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseFolder342: '/v3.42/',
    baseUrl: 'http://localhost:3001/ghost/',
    supportFile: 'cypress/support/commands.js',
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    viewportWidth: 1280,
    viewportHeight: 800
  },
  env: {
    OldPass: "abcde12345",
    NewPass: "Test123456"
  }
})
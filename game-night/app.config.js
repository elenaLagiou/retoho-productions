// Expo reads app.json first and passes it here as "config".
// GitHub Pages serves the site from /retoho-productions/, not from /,
// so the build:pages script sets PAGES_BASE_URL and every link and
// file path gets that prefix. Locally it is empty, so nothing changes.
module.exports = ({ config }) => ({
  ...config,
  experiments: {
    ...config.experiments,
    baseUrl: process.env.PAGES_BASE_URL || '',
  },
});

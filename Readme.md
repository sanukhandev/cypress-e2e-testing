# Cypress Configuration

This repository contains the configuration options for Cypress tests.

## Configuration Options

The following configuration options are set in the `cypress.config.js` file:

- `reporter`: Specifies the reporter to use for test results. In this case, the `mochawesome` reporter is used.
- `reporterOptions`: Specifies additional options for the `mochawesome` reporter, such as charts, report directory, report filename, and output format.
- `screenshotsFolder`: Specifies the folder where screenshots are saved.
- `videosFolder`: Specifies the folder where videos are saved.
- `video`: Specifies whether to capture video recordings of test runs.
- `screenshots`: Specifies whether to capture screenshots of test runs.
- `e2e.baseUrl`: Specifies the base URL for the application being tested.
- `e2e.setupNodeEvents`: Specifies any custom node event listeners to implement.

## Getting Started

To use this configuration in your own Cypress tests, simply copy the contents of the `cypress.config.js` file to the `cypress.json` file in your project directory. You can then modify the configuration options as needed for your specific project.

To run Cypress tests using this configuration, use the `cypress run` command in your terminal, or use a CI/CD tool to automatically run your tests on every commit or pull request.

## Contributing

If you notice any issues or have suggestions for improvements to this configuration, please submit an issue or pull request on the repository. We welcome contributions from the community and strive to make this configuration as useful as possible for all users.

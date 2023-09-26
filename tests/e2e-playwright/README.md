# Plane App Testing with Playwright

<div align="center">

![ui](../attachments/plane-ui.png)

[![Test Results](https://img.shields.io/badge/tests-passing-brightgreen)](https://clickworks.me/public_reports/test-results.xml)  
[Click to View Test Results HTML Report (17)](https://clickworks.me/public_reports/index.html)

</div>

## About

This test suite is built using Playwright and TypeScript, offering a robust and efficient solution for browser automation. Playwright's cross-browser capabilities ensure comprehensive test coverage.

The project has the following structure:

```bash
.
├── e2e-testing.md
├── node_modules
├── package-lock.json
├── package.json
├── playwright-report
├── playwright.config.ts
├── storageState.json
├── test-results
└── tests
    ├── api
    ├── data
    ├── setup
    ├── ui
    └── utils  
```

```bash
❯ cd ui
.
├── fixtures
├── pages
└── specs
```

The following techniques and approaches where used:

- [x] Page Object Model (POM)
- [x] Fixtures
- [x] Project setup and StorageSession
- [x] Locators with prioritized user-facing attributes
- [ ] API testing / interactions
- [x] Visual testing
- [ ] Continuous testing with Azure Pipelines
- [ ] Add multiple environments
- [ ] Parametrize and improve pipeline
- [ ] Deploy Plane app using Azure services
- [ ] Run full pipeline (build, deploy, test)

Progress
- [x] Clone Plane repo and launch application locally via Docker
- [x] Install Dbeaver app and get access to local Plane database
- [x] Explore Plane app - feature tour. Create mindmap 
- [x] Make a list of smoke tests to automate in Playwright 
- [x] Install Playwright and create test project structure
- [x] Implement 2 smoke tests and POM
- [x] Implement setup and use StorageState to speed up login action.
- [x] Implement remaining smoke tests (10)
- [x] Prepare a simplified Test Strategy
- [x] Refactor tests using POM
- [x] Refactor test for Dashboard using fixture
- [ ] Refactor all tests: add hook, fixture, data
- [ ] Create automation test plan
- [ ] Automate tests Feature 1
- [ ] Automate tests Feature 2
- [ ] Manage state using API
- [ ] Create Azure pipeline

## Installation

Change directory:

```shell
cd tests/e2e-playwright
```

Install dependencies:

```shell
npm -i 
```

## Run tests

```
npx npx playwright test
```

## Resources

1. [Introduction to Playwright](https://testautomationu.applitools.com/playwright-intro/)
2. [Playwright](https://playwright.dev/docs/intro)

## Concepts and techniques practiced  

- [x] Page Object Model (POM) [Page object models | Playwright](https://playwright.dev/docs/pom)
- [x] UI authentication using storageState() [Authentication | Playwright](https://playwright.dev/docs/auth)
- [x] Global setup [Global setup and teardown | Playwright](https://playwright.dev/docs/test-global-setup-teardown)
- [x] Using hooks and Dynamic Page Objects


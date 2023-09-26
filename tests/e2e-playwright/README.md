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
├── README.md
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

Progress

- [x] Clone Plane repo and launch application locally via Docker
- [x] Install Dbeaver app and get access to local Plane database
- [x] Explore Plane app - feature tour. Create mindmap
- [x] Make a list of smoke tests to automate in Playwright
- [x] Install Playwright and create test project structure
- [x] Implement 2 smoke tests and POM [Page object models | Playwright](https://playwright.dev/docs/pom)
- [x] Implement setup and use StorageState to speed up login action [Authentication | Playwright](https://playwright.dev/docs/auth), [Global setup and teardown | Playwright](https://playwright.dev/docs/test-global-setup-teardown)
- [x] Implement remaining smoke tests (10)
- [x] Implement visual testing
- [x] Prepare a simplified Test Strategy
- [ ] Create automation test plan
- [x] Refactor tests using POM
- [x] Refactor test for Dashboard using fixture
- [x] Implement locators with prioritized user-facing attributes
- [ ] Refactortests: add hooks with Dynamic Page Objects
- [ ] Implement API testing / interactions
- [ ] Create Azure CI/CD Pipeline for continuous testing
- [ ] Add multiple environments
- [ ] Parametrize and improve pipeline
- [ ] Deploy Plane app using Azure services
- [ ] Run full pipeline (build, deploy, test)
- [ ] Manage state using API

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

```shell
npx playwright test

```

## Resources

1. [Introduction to Playwright](https://testautomationu.applitools.com/playwright-intro/)
2. [Playwright](https://playwright.dev/docs/intro)

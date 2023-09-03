# Plane App Testing with Playwright

<div align="center">

![](attachments/plane-ui.png)

[![Test Results](https://img.shields.io/badge/tests-passing-brightgreen)](https://clickworks.me/public_reports/test-results.xml)  
[Click to View Test Results HTML Report (17)](https://clickworks.me/public_reports/index.html)

</div>
## About

This test suite is built using Playwright and TypeScript, offering a robust and efficient solution for browser automation. Playwright's cross-browser capabilities ensure comprehensive test coverage.

The project has the following structure:

```bash
tree -L 2
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
❯ tree -L 2
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

- [x] Smoke test
- [x] Refactor using POM
- [x] Refactor with fixtures
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

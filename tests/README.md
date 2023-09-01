# Plane App Testing with Playwright

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
- [x] API testing / interactions
- [x] Visual testing

Progress

- [x] Smoke test
- [x] Refactor using POM
- [ ] Refactor with fixtures
- [ ] Feature 1
- [ ] Feature 2
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

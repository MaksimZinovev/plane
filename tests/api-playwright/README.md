# Plane App API Testing with Playwright

<div align="center">

![api](../attachments/plane-ui.png)

[![Test Results](https://img.shields.io/badge/tests-passing-brightgreen)](https://clickworks.me/public_reports/test-results.xml)  
[Click to View Test Results HTML Report (17)](https://clickworks.me/public_reports/index.html)

</div>

## About

This is a demo test suite with API tests created using Playwright (1.38.0) and TypeScript. It does not provide extensive coverage. The main purpose was to learn and practice basic tests, assertions, techniques and best practices.

The project has the following structure:

```bash
.
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── playwright-report
├── playwright.config.ts
├── test-results
└── tests
    ├── specs
    ├── data
    ├── setup
    └── utils  
```

Progress

- [x] Explore application APIs using Postman VS Code extension
- [x] Install Playwright and create test project structure
- [x] Implement one simple test
- [x] Refactor test by adding authentication
- [ ] Refactor authentication using datafactory approach for authentication
- [ ] Add better assertions
- [ ] Add more smoke tests
- [ ] Add more in-depth checks

## Installation

1. Firstly, refer to this [README file](https://github.com/MaksimZinovev/plane) to find instructions on how to clone Plane App repo and launch local version using Docker. Once it is finished, try to log in using default credentials (see below).

2. Switch to branch `api-playwright`

3. Change directory:

```shell
cd tests/api-playwright
```

4. Install dependencies:

```shell
npm -i 
```

5. Create `.env` file. Add  your details:

```text
PASSWORD=password123
USERNAME=captain@plane.so
URL=http://localhost/
```

## Run tests

```shell
npx playwright test

```

## Resources

1. [Introduction to Playwright](https://testautomationu.applitools.com/playwright-intro/)
2. [Playwright](https://playwright.dev/docs/intro)
3. [Playwright Solutions](https://playwrightsolutions.com/)

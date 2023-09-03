import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import dotenv from 'dotenv';

export const STORAGE_STATE: string = path.join(__dirname, './storageState.json');
export const PROJECT_NAME: string = 'Airbus';
export const PROJECT_PATH: string = 'projects';
export const WORKSPACE_NAME: string = 'beta';
export const ISSUE_ID: string = '7c15c65c-0bd0-497b-979d-7b705c06dfcb/issues/db243181-3be0-444a-97be-88bd92fe8754';


const result = dotenv.config();
if (result.error) {
  throw result.error;
}

export default defineConfig({
  outputDir: './test-results',
  timeout: 1 * 10000,
  testDir: './tests',
  /* Run tests in files in parallel 
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'], ['list'], ['junit', { outputFile: 'test-results/test-results.xml' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost',
    colorScheme: 'dark',
    // Retain video
    video: 'retain-on-failure',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    // headless: false,
    headless: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: /global-setup\.ts/
    },
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        storageState: STORAGE_STATE
      },
      dependencies: ['setup']
    },
  ],
});


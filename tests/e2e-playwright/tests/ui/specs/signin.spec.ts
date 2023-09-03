import { test, expect } from "../fixtures/dashboard-fixture";;
import { SignInPage } from '../../ui/pages/signin-page';

let signInPage: SignInPage;

test.beforeEach(async ({ page }) => {
  signInPage = new SignInPage(page);
  await signInPage.goto('/')
});

// Do not use storage state when running sign in tests
test.use({ storageState: { cookies: [], origins: [] } })

test.describe("Sign in page", () => {
  // Check if the page is loaded and  heading is displayed 'Sign in to Plane'

  test("has title", async () => {
    await signInPage.checkHeading();
  });
  test("sign in page visual check", async () => {
    // Visual check for the sign in page
    await signInPage.checkSignInPageVisual();
  });

  test("user can sign in with valid credentials", async ({ page, dashboardPage }) => {

    // console.log('captain@plane.so');
    await signInPage.fillEmail(process.env.USERNAME!);
    await signInPage.fillPassword(process.env.PASSWORD!);
    await signInPage.clickSignInButton();

    // Check title of dashboard page
    await dashboardPage.checkUrl();
    await dashboardPage.checkHeading();
  });
});

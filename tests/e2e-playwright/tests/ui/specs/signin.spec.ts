import { test, expect, type Page } from "@playwright/test";
import { SignInPage } from '../../ui/pages/signin-page';
import { DashboardPage } from '../../ui/pages/dashboard-page';

let signInPage: SignInPage;

test.beforeEach(async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.goto('/')
});


test.describe("Sign in page", () => {
  // Check if the page is loaded and  heading is displayed 'Sign in to Plane'

  test("has title", async () => {
    await signInPage.checkHeading();
  });
  test("sign in page visual check", async () => {
    // Visual check for the sign in page
    await signInPage.checkSignInPageVisual();
  });

  test.only("user can sign in with valid credentials", async ({ page }) => {

    // console.log('captain@plane.so');
    await signInPage.fillEmail(process.env.USERNAME!);
    await signInPage.fillPassword(process.env.PASSWORD!);
    await signInPage.clickSignInButton();

    const dashboardPage = new DashboardPage(page);
    // Check title of dashboard page
    await dashboardPage.checkUrl();
    await dashboardPage.checkHeading();
  });
});

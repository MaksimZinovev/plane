import { test, expect, type Page } from "@playwright/test";
import { SignInPage } from '../../ui/pages/signin-page';

let signInPage: SignInPage;

test.beforeEach(async ({ page }) => {
  signInPage = new SignInPage(page);
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

  test.skip("user can sign in with valid credentials", async ({page}) => {

    console.log("USERNAME");
    await signInPage.fillEmail("USERNAME");
    await signInPage.fillPassword('password123');
    await signInPage.clickSignInButton();

    const dashbordPage = page;
    // Visual check for the sign in page
    await dashbordPage.waitForURL(/alpha/, {timeout: 10000});
    await expect(dashbordPage).toHaveURL(/alpha/);
    await expect(dashbordPage.getByRole('main').getByText(/dashboard/i)).toBeVisible();
  });
});

import { test } from "@playwright/test";
import { DashboardPage } from '../pages/dashboard-page';

let dashboardPage: DashboardPage

test.beforeEach(async ({ page }) => {
  dashboardPage = new DashboardPage(page);
  await dashboardPage.goto();
});

test.describe("Dashboard page", () => {
// Question: Why using `test.only` produces error  Cannot read properties of undefined (reading '_hasTests')
  test.only("user can open dashboard page", async () => {
    await dashboardPage.checkHeading();
  });

  test("dashboard page visual check", async () => {
    await dashboardPage.checkDashboardPageVisual();
  });

});

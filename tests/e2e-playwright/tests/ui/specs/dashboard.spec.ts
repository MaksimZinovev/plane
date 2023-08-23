import { test, expect } from "@playwright/test";
import { DashboardPage } from '../pages/dashboard-page';

let dashboardPage: DashboardPage;

test.beforeEach(async ({ page }) => {
  dashboardPage = new DashboardPage(page);
  await dashboardPage.goto();
  await dashboardPage.checkHeading();
});

test.describe("Dashboard page", () => {
  test("check dashboard page", async () => {
    await test.step("user can open dashboard page", async () => {
      await dashboardPage.checkHeading();
    });
    await test.step("dashboard page visual check", async () => {
      await dashboardPage.checkDashboardPageVisual();
    });
  });
  test("check dashboard page test", async ({ page}) => {
    await expect(page).toHaveURL(/beta/);

  });
});

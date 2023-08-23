import { test } from "@playwright/test";
import { AnalyticsPage } from '../pages/analytics-page';

let analyticsPage: AnalyticsPage;

test.beforeEach(async ({ page }) => {
  analyticsPage = new AnalyticsPage(page);
  await analyticsPage.goto();
});

test.describe("analytics page", () => {
  test("check analytics page @smoke", async () => {
    await test.step("check analytics page title @smoke", async () => {
      await analyticsPage.checkUrl();
      await analyticsPage.checkHeading();
    });
    await test.step("analytics page visual check", async () => {
      await analyticsPage.checkAnalyticsPageVisual();
    });

  });

});



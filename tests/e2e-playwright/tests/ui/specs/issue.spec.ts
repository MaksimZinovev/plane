import { test } from "@playwright/test";
import { IssuePage } from '../pages/issue-page';

let issuePage: IssuePage;

test.beforeEach(async ({ page }) => {
  issuePage = new IssuePage(page);
  await issuePage.goto();
});

test.describe("Issue page", () => {
  test("check issue page @smoke", async () => {
    await test.step("check issue page title @smoke", async () => {
      await issuePage.checkUrl();
      await issuePage.checkIssueTitle();
    });
    await test.step("projects page visual check", async () => {
      await issuePage.checkPageVisual();
    });

  });

});



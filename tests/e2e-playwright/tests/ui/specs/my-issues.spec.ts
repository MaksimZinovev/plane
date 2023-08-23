import { test, expect, type Page } from "@playwright/test";
import { MyIssuesPage } from '../pages/my-issues-page';

let myIssuesPage: MyIssuesPage;

test.beforeEach(async ({ page }) => {
  myIssuesPage = new MyIssuesPage(page);
  await myIssuesPage.goto();
});

test.describe("my issues page", () => {
  test("check 'my issues' page @smoke", async () => {
    await test.step("check 'my issuess page title @smoke", async () => {
      await myIssuesPage.checkUrl();
      await myIssuesPage.checkHeading();
    });
    await test.step("'my issues'page visual check", async () => {
      await myIssuesPage.checkPageVisual();
    });

  });

});



import { test } from "@playwright/test";
import { IssuePage } from '../pages/issue-page';
import hooks from '../../utils/hooks';
import pages from "../../utils/pages";
import { ISSUE_ID, PROJECT_ID, WORKSPACE_NAME } from "../../../playwright.config";
import uiPages from "../../utils/uiPages";



let issuePage: IssuePage;

test.beforeEach(async ({ page }) => {
  const pageInstance = await hooks.beforeEach(
    page,
    IssuePage,
    WORKSPACE_NAME,
    pages.issuePage,
    PROJECT_ID,
    ISSUE_ID);
  if (pageInstance instanceof IssuePage) {
    issuePage = pageInstance;
  }
  // issuePage = new IssuePage(page);
  // await issuePage.goto();
});

test.describe("Issue page", () => {
  test("check issue page @smoke", async () => {
    await test.step("title @smoke", async () => {
      await issuePage.checkUrl();
      await issuePage.checkIssueTitle();
    });
    await test.step("full page visual check", async () => {
      await issuePage.checkPageVisual();
    });

  });

});



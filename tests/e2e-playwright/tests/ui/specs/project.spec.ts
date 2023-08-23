import { test, expect, type Page } from "@playwright/test";
import { SignInPage } from '../pages/signin-page';
import { ProjectPage } from '../pages/project-page';

let projectPage: ProjectPage;

test.beforeEach(async ({ page }) => {
  projectPage = new ProjectPage(page);
  await projectPage.goto();
});


test.describe("Project page", () => {
  test.only("check project page", async () => {
    test.step("user can open project page", async () => {
      await projectPage.checkHeading();
    });
    test.step("project page visual check", async () => {
      await projectPage.checkDashboardPageVisual();
    });
  });
});

import { test, expect, type Page } from "@playwright/test";
import { ProjectsPage } from '../pages/my-issues-page';

let projectsPage: ProjectsPage;

test.beforeEach(async ({ page }) => {
  projectsPage = new ProjectsPage(page);
  await projectsPage.goto();
});

test.describe("Projects page", () => {
  test("check projects page @smoke", async () => {
    await test.step("check projects page title @smoke", async () => {
      await projectsPage.checkUrl();
      await projectsPage.checkHeading();
    });
    await test.step("projects page visual check", async () => {
      await projectsPage.checkProjectsPageVisual();
    });

  });

});



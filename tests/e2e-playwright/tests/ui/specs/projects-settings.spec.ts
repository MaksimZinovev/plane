import { test, expect, type Page, Locator } from "@playwright/test";
import { DashboardPage } from '../pages/dashboard-page';
import ProjectSettingsPage from "../pages/project-settings-page";
import ProjectsMenu from "../pages/projects-menu";

let dashboardPage: DashboardPage;
let projectsMenu: ProjectsMenu;
let projectSettingsPage: ProjectSettingsPage;

test.beforeEach(async ({ page }) => {
  dashboardPage = new DashboardPage(page);
  projectsMenu = new ProjectsMenu(page);
  await dashboardPage.goto();
  await projectsMenu.clickProjectButton(1);
  await projectsMenu.clickSettingsButton();
  projectSettingsPage = new ProjectSettingsPage(page);
});

test.describe("Project settings page", () => {
  test.only("user can open project settings page @smoke", async () => {
    await projectSettingsPage.checkProjectSettingsHeadingVisible();
    await projectSettingsPage.checkPageVisual();
  });
});
import { test, expect, type Page, Locator } from "@playwright/test";
import { WorkspaceMenu } from '../pages/workspace-menu';
import { WORKSPACE_NAME } from "../../../playwright.config";
import DashboardPage from "../pages/dashboard-page";
import { WorkspaceSettingsPage } from "../pages/workspace-settings-page";

let workspaceSettingsPage: WorkspaceSettingsPage;
let workspaceMenu: WorkspaceMenu;
let dashboardPage: DashboardPage;


test.beforeEach(async ({ page }) => {
  dashboardPage = new DashboardPage(page);
  await dashboardPage.goto();

  workspaceMenu = new WorkspaceMenu(page);
  await workspaceMenu.clickWorkspaceMenuButton(new RegExp(WORKSPACE_NAME, 'i'));
  // await workspaceMenu.clickWorkspaceSettingsButton();
  await workspaceMenu.clickLink('workspace settings');
  workspaceSettingsPage = new WorkspaceSettingsPage(page);
});

test.describe("workspace settings page", () => {

  test("user can open  workspace settings page @smoke", async () => {
    await workspaceSettingsPage.checkWorkspaceSettingsHeading();
  });

  test("workspace settings page visual check @smoke @visual", async () => {
    await workspaceSettingsPage.checkPageVisual();
  });

});






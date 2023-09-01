import { test, expect, type Page, Locator } from "@playwright/test";
import { WorkspaceMenu } from '../pages/workspace-menu';
import { WORKSPACE_NAME } from "../../../playwright.config";
import DashboardPage from "../pages/dashboard-page";
import WorkspaceMyProfilePage from "../pages/workspace-my-profile-page";

let workspaceMyProfilePage: WorkspaceMyProfilePage;
let workspaceMenu: WorkspaceMenu;
let dashboardPage: DashboardPage;


test.beforeEach(async ({ page }) => {
  dashboardPage = new DashboardPage(page);
  await dashboardPage.goto();

  workspaceMenu = new WorkspaceMenu(page);
  await workspaceMenu.clickWorkspaceMenuButton(new RegExp(WORKSPACE_NAME, 'i'));
  await workspaceMenu.clickLink('my profile');
  workspaceMyProfilePage = new WorkspaceMyProfilePage(page);
});

test.describe("workspace My Profile page", () => {

  test("user can open  workspace My Profile page @smoke", async () => {
    await workspaceMyProfilePage.checkWorkspaceMyProfileHeading();
  });

  test("workspace MyProfile page visual check @smoke @visual", async () => {
    await workspaceMyProfilePage.checkPageVisual();
  });

});






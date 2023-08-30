import { test, expect } from "@playwright/test";
import { NotificationsPopover } from '../pages/notifications-popover';
import { DashboardPage } from '../pages/dashboard-page';
import { WorkspaceMenu } from '../pages/workspace-menu';

let notificationsPopover: NotificationsPopover;
let dashboardPage: DashboardPage;
let workspaceMenu: WorkspaceMenu;

test.beforeEach(async ({ page }) => {
  dashboardPage = new DashboardPage(page);
  workspaceMenu = new WorkspaceMenu(page);
  notificationsPopover = new NotificationsPopover(page);
  await dashboardPage.goto();
  await dashboardPage.checkHeading();
  await workspaceMenu.clickButton('notifications');
});


test.describe("notifications page", () => {
  test("check notifications page @smoke", async () => {
    await test.step("user can open notifications popover", async () => {
      await notificationsPopover.checkPopoverVisible();
    });
    await test.step("notifications page visual check", async () => {
      await notificationsPopover.checkPopoverVisual();
    });
  });
  test("check notifications popover not visible", async () => {
    await notificationsPopover.close();
    await notificationsPopover.checkPopoverNotVisible();
  });
});

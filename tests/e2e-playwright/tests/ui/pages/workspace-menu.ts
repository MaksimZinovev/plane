import { type Page, type Locator, expect } from "@playwright/test";
import { expectScreenshot } from "../../utils/utils";
import { WORKSPACE_NAME } from "../../../playwright.config";

/* 
* Menu in the top left corner of the page which consists of 5 items:
* Dashboard, Analytics, Projects, My Issues, Notifications
*/

type ButtonKey = keyof typeof buttons;
export const buttons = {
    dashboard: /dashboard/i,
    analytics: /analytics/i,
    projects: /projects/i,
    'my issues': /my issues/i,
    notifications: /notifications/i,
};
type LinkKey = keyof typeof links;

const links = {
    'workspace settings': /workspace settings/i,
    'workspace invited': /workspace settings/i,
    'my profile': /my profile/i,
};

type MenuItemKey = keyof typeof menuItems;
const menuItems = {
    'create workspace': /workspace settings/i,
    'sign out': /sign out/i,
    'workspace name': /WORKSPACE_NAME/i,
};


export class WorkspaceMenu {
    readonly page: Page;
    readonly buttons: typeof buttons;
    readonly links: typeof links;
    readonly menuItems: typeof menuItems;
    readonly workspaceButton: Locator;
    readonly workspaceSettingsButton: Locator;
    readonly workspaceMyProfilesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.workspaceButton = page.getByRole('button');
        this.buttons = buttons;
        this.links = links;
        this.menuItems = menuItems;
        this.workspaceSettingsButton = page.getByRole('link', { name: 'Workspace Settings' });
    }

    async clickButton(buttonKey: ButtonKey) {
        await this.page.getByRole('button', { name: this.buttons[buttonKey] }).click();
    };

    async clickLink(linkKey: LinkKey) {
        await this.page.getByRole('link', { name: this.links[linkKey] }).click();
    };

    async clickMenuItem(menuItemKey: MenuItemKey) {
        await this.page.getByRole('link', { name: this.menuItems[menuItemKey] }).click();
    };

    async clickWorkspaceMenuButton(workspaceName: RegExp) {
        await this.workspaceButton.getByText(workspaceName).click();
    };

    async clickWorkspaceSettingsButton() {
        await this.workspaceSettingsButton.click();
    };

    async checkPopoverVisual() {
        await expectScreenshot(this.page);
    }
}
export default WorkspaceMenu;
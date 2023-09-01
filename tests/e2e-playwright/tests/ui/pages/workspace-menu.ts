import { type Page, type Locator, expect } from "@playwright/test";
import { expectScreenshot } from "../../utils/utils";

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


export class WorkspaceMenu {
    readonly page: Page;
    readonly workspaceButton: Locator;
    readonly buttons: typeof buttons;
    readonly workspaceSettingsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttons = buttons;
        this.workspaceButton = page.getByRole('button');
        this.workspaceSettingsButton = page.getByRole('link', { name: 'Workspace Settings' });
    }

    async clickButton(buttonKey: ButtonKey) {
        await this.page.getByRole('button', { name: this.buttons[buttonKey] }).click();
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
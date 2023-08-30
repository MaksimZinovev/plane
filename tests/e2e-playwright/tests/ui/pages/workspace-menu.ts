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
    readonly notificationsButton: Locator;
    readonly dashboardButton: Locator;
    readonly analyticsButton: Locator;
    readonly projectsButton: Locator;
    readonly myIssuesButton: Locator;
    readonly buttons: typeof buttons;

    constructor(page: Page) {
        this.page = page;
        this.buttons = buttons;
    }

    async clickButton(buttonKey: ButtonKey) {
        await this.page.getByRole('button', { name: this.buttons[buttonKey] }).click();
    };



    async checkPopoverVisual() {
        await expectScreenshot(this.page);
    }
}
export default WorkspaceMenu;
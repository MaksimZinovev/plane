import { type Page, type Locator, expect } from "@playwright/test";
import { expectScreenshot } from "../../utils/utils";
import { WORKSPACE_NAME, ISSUE_ID, PROJECT_PATH } from "../../../playwright.config";


export class NotificationsPopover {
    readonly page: Page;
    readonly popover: Locator;
    readonly notificationsHeading: Locator;
    readonly closeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popover = page.locator("[id*='popover-panel']");
        this.notificationsHeading = this.popover.getByRole('heading', { name: 'Notifications', exact: true });
        this.closeButton = this.popover.getByRole('button', { name: 'close' });
    }

    async close() {
        await this.closeButton.click();
    };



    async checkPopoverVisible() {
        await expect(this.popover).toBeVisible();
    }

    async checkPopoverNotVisible() {
        await expect(this.popover).not.toBeVisible();
    }

    async checkPopoverVisual(maxDiffPixelRatio: number = 0.02) {
        await expect(this.popover).toHaveScreenshot({ maxDiffPixelRatio: maxDiffPixelRatio });
    }
}
export default NotificationsPopover;
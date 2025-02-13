import { type Page, type Locator, expect } from "@playwright/test";
import { WORKSPACE_NAME } from "../../../playwright.config";
import { expectScreenshot } from "../../utils/utils";

const HEADING_TEXT: string = "Dashboard"


export class DashboardPage {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('main').getByText(/dashboard/i);
    
    }

    async goto() {
        await this.page.goto(`${WORKSPACE_NAME}`);
        await expect(this.heading).toHaveText(HEADING_TEXT);
    };

    async checkUrl(url: string = WORKSPACE_NAME) {
        await this.page.waitForURL(/beta/, { timeout: 10000 });
        await expect(this.page).toHaveURL(/beta/);
    }
    async checkHeading() {
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText(HEADING_TEXT);
    }

    async checkPageVisual() {
        await expectScreenshot(this.page);
    }
}
export default DashboardPage;
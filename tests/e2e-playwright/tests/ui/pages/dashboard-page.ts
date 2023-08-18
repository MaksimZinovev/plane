import { type Page, type Locator, expect } from "@playwright/test";

const HEADING_TEXT: string = "Dashboard"
const PROJECT_URL: string = "beta"

export class DashboardPage {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('main').getByText(/dashboard/i);
    
    }

    async goto() {
        await this.page.goto(`./${PROJECT_URL}`);
    };

    async checkUrl() {
        await this.page.waitForURL(/beta/, { timeout: 10000 });
        await expect(this.page).toHaveURL(/beta/);
    }
    async checkHeading() {
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText(HEADING_TEXT);
    }

    async checkDashboardPageVisual() {
        await expect(this.page).toHaveScreenshot({ fullPage: true });
    }
}
export default DashboardPage;
import { type Page, type Locator, expect } from "@playwright/test";


const ANALYTICS_PATH: string = "analytics";
const PROJECTS_DEFAULT_WORKSPACE: string = "beta";

export class AnalyticsPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly workspaceName: string;

    constructor(page: Page, workspaceName?: string) {
        this.page = page;
        this.workspaceName = workspaceName ? workspaceName : PROJECTS_DEFAULT_WORKSPACE;
        this.heading = page.getByText('Workspace Analytics');

    }

    async goto() {
        await this.page.goto(`./${this.workspaceName}/${ANALYTICS_PATH}`);
    };

    async checkUrl() {
        await expect(this.page).toHaveURL(`${this.workspaceName}/${ANALYTICS_PATH}`);
    }
    async checkHeading() {
        await expect(this.heading).toBeVisible();
    }

    async checkAnalyticsPageVisual() {
        await expect(this.page).toHaveScreenshot({ fullPage: true });
    }
}
export default AnalyticsPage;
import { type Page, type Locator, expect } from "@playwright/test";
import { expectScreenshot } from "../../utils/utils";
import { WORKSPACE_NAME } from "../../../playwright.config";

const ANALYTICS_PATH: string = "analytics";


export class AnalyticsPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly workspaceName: string = WORKSPACE_NAME;

    constructor(page: Page,
        workspaceName: string = WORKSPACE_NAME) {
        this.page = page;
        this.workspaceName = workspaceName;
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

    async checkPageVisual() {
        await expectScreenshot(this.page);
    }
}
export default AnalyticsPage;
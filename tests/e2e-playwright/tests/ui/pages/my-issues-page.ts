import { type Page, type Locator, expect } from "@playwright/test";
import { expectScreenshot } from "../../utils/utils";


const MY_ISSUES_PATH: string = "me/my-issues";
const PROJECTS_DEFAULT_WORKSPACE: string = "beta";

export class MyIssuesPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly workspaceName: string;

    constructor(page: Page, workspaceName?: string) {
        this.page = page;
        this.workspaceName = workspaceName ? workspaceName : PROJECTS_DEFAULT_WORKSPACE;
        this.heading = page.getByRole('link', { name: 'My Issues' });
        console.log(`this.workspaceName: ${this.workspaceName}`)
    }

    async goto() {
        await this.page.goto(`./${this.workspaceName}/${MY_ISSUES_PATH}`);
    };

    async checkUrl() {
        await expect(this.page).toHaveURL(`${this.workspaceName}/${MY_ISSUES_PATH}`);
    }
    async checkHeading() {
        await expect(this.heading).toBeVisible();
    }

    async checkPageVisual() {
        await expectScreenshot(this.page);
    }
}
export default MyIssuesPage;
import { type Page, type Locator, expect } from "@playwright/test";
import { expectScreenshot } from "../../utils/utils";
import { WORKSPACE_NAME, ISSUE_ID, PROJECT_PATH } from "../../../playwright.config";


export class IssuePage {
    readonly page: Page;
    readonly issueTitle: Locator;
    readonly workspaceName: string = WORKSPACE_NAME;

    constructor(
        page: Page,
        workspaceName: string = WORKSPACE_NAME
    ) {
        this.page = page;
        this.workspaceName = workspaceName;
        this.issueTitle = page.getByPlaceholder('Enter issue name');

    }

    async goto(
        workspaceName: string = this.workspaceName,
        issueId: string = ISSUE_ID) {
        await this.page.goto(`./${workspaceName}/${PROJECT_PATH}/${issueId}`);
        // http://localhost/beta/projects/7c15c65c-0bd0-497b-979d-7b705c06dfcb/issues/db243181-3be0-444a-97be-88bd92fe8754
    };

    async checkUrl(
        workspaceName: string = this.workspaceName,
        issueId: string = ISSUE_ID
    ) {
        await expect(this.page).toHaveURL(`./${workspaceName}/${PROJECT_PATH}/${issueId}`);
    }
    async checkIssueTitle() {
        await expect(this.issueTitle).toBeVisible();
    }

    async checkPageVisual() {
        await expectScreenshot(this.page);
    }
}
export default IssuePage;
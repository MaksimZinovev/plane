import { type Page, type Locator, expect } from "@playwright/test";
import { expectScreenshot, toUpperCaseFirstLetter } from "../../utils/utils";

const PROJECTS_PATH: string = "projects";
const PROJECTS_DEFAULT_WORKSPACE: string = "beta";

export class ProjectsPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly workspaceName: string;

    constructor(
        page: Page,
        workspaceName: string = PROJECTS_DEFAULT_WORKSPACE
    ) {
        this.page = page;
        this.workspaceName = workspaceName;
        this.heading = page.getByText(toUpperCaseFirstLetter(this.workspaceName) + ' Projects');
        console.log(`this.workspaceName: ${this.workspaceName}`)
    }

    async goto() {
        await this.page.goto(`./${this.workspaceName}/${PROJECTS_PATH}`);
    };

    async checkUrl() {
        await expect(this.page).toHaveURL(`${this.workspaceName}/${PROJECTS_PATH}`);
    }
    async checkHeading() {
        await expect(this.heading).toBeVisible();
    }

    async checkProjectsPageVisual() {
        await expectScreenshot(this.page);
    }
}
export default ProjectsPage;
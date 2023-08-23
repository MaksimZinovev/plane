import { type Page, type Locator, expect } from "@playwright/test";


const PROJECTS_PATH: string = "projects";
const PROJECTS_DEFAULT_WORKSPACE: string = "beta";

export class ProjectsPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly workspaceName: string;

    constructor(page: Page, workspaceName?: string) {
        this.page = page;
        this.workspaceName = workspaceName ? workspaceName : PROJECTS_DEFAULT_WORKSPACE;
        this.heading = page.getByText(this.workspaceName.charAt(0).toUpperCase() + this.workspaceName.slice(1)+' Projects');
        console.log(`this.workspaceName: ${this.workspaceName}`)
    }

    async goto() {
        await this.page.goto(`./${this.workspaceName}/${PROJECTS_PATH}`);
    };

    async checkUrl() {
        await expect(this.page ).toHaveURL(`${this.workspaceName}/${PROJECTS_PATH}`);
    }
    async checkHeading() {
        await expect(this.heading).toBeVisible();
    }

    async checkProjectsPageVisual() {
        await expect(this.page).toHaveScreenshot({ fullPage: true });
    }
}
export default ProjectsPage;
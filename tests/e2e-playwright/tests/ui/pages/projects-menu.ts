import { type Page, type Locator, expect } from "@playwright/test";

export class ProjectsMenu {
    readonly page: Page;
    readonly projectsButton: Locator;
    readonly nthProjectButton: Locator;
    readonly settingsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.projectsButton = page.getByRole('button', { name: 'Projects arrow_down' });
        this.nthProjectButton = page.locator('[id*="headlessui-disclosure"]').filter({ hasNotText: 'Projects' });
        this.settingsButton = page.getByRole('link', { name: 'Settings' });
    }

    async clickProjectsButton() {
        await this.projectsButton.click();
    };
    async clickProjectButton(index: number) {
        await this.nthProjectButton.nth(index).click();
    };

    async clickSettingsButton() {
        await this.settingsButton.click();
    };

}
export default ProjectsMenu;
import { type Page, type Locator, expect } from "@playwright/test";
import { expectScreenshot, toUpperCaseFirstLetter } from "../../utils/utils";
import { PROJECT_NAME } from "../../../playwright.config";

export class ProjectSettingsPage {
    readonly page: Page;
    readonly projectSettingsHeading: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.projectSettingsHeading = page.getByRole('heading', { name: 'Project Settings' });
    }
  
    async checkProjectSettingsHeadingVisible() {
      await expect(this.projectSettingsHeading).toBeVisible();
    };
    async checkPageVisual() {
      await expectScreenshot(this.page);
    };
  }
export default ProjectSettingsPage;
import { type Page, type Locator, expect } from "@playwright/test";
import { expectScreenshot } from "../../utils/utils";
import { WORKSPACE_NAME } from "../../../playwright.config";

/* Top left corner > Workspace >  My Profile */

export class WorkspaceMyProfilePage {
    readonly page: Page;
    readonly workspaceMyProfileHeading: Locator;
    readonly workspaceName: string = WORKSPACE_NAME;
  
    constructor(
      page: Page,
      workspaceName: string = WORKSPACE_NAME
    ) {
      this.page = page;
      this.workspaceName = workspaceName;
      this.workspaceMyProfileHeading = page.getByRole('heading', { name: 'Overview' });
  
    }
  
    async checkWorkspaceMyProfileHeading() {
      await expect(this.workspaceMyProfileHeading).toBeVisible();
    }
  
    async checkPageVisual() {
      await expectScreenshot(this.page);
    }
  }
  
export default WorkspaceMyProfilePage;
import { type Page, type Locator, expect } from "@playwright/test";
import { expectScreenshot } from "../../utils/utils";
import { WORKSPACE_NAME } from "../../../playwright.config";

/* Top left corner > Workspace >  Workspace Settings */

export class WorkspaceSettingsPage {
    readonly page: Page;
    readonly workspaceSettingsHeading: Locator;
    readonly workspaceName: string = WORKSPACE_NAME;
  
    constructor(
      page: Page,
      workspaceName: string = WORKSPACE_NAME
    ) {
      this.page = page;
      this.workspaceName = workspaceName;
      this.workspaceSettingsHeading = page.getByRole('heading', { name: 'Workspace Settings' });
  
    }
  
    async checkWorkspaceSettingsHeading() {
      await expect(this.workspaceSettingsHeading).toBeVisible();
    }
  
    async checkPageVisual() {
      await expectScreenshot(this.page);
    }
  }
  
export default WorkspaceSettingsPage;
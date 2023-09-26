import { Page } from "@playwright/test";
import { buildUrl, uiPagesType } from "./uiUrlBuilder";
import IssuePage from "../ui/pages/issue-page";
type PageClass = typeof IssuePage;

async function beforeEach(
    page: Page,
    PageObjectParam: PageClass,
    workspaceName: string,
    targetPage: string,
    projectId?: string | unknown,
    id?: string | unknown
) {
    await page.goto(buildUrl(workspaceName, targetPage, projectId, id));
    const pageObject = new PageObjectParam(page);
    return pageObject;

}

export default { beforeEach }

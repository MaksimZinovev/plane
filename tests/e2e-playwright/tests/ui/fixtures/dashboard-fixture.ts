import { test as base } from "@playwright/test";
import DashboardPage from "../pages/dashboard-page";


type Fixtures = {
    dashboardPage: DashboardPage;
}

export const test = base.extend<Fixtures>({
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.goto();
        await use(dashboardPage);
    }
});

export { expect } from "@playwright/test";
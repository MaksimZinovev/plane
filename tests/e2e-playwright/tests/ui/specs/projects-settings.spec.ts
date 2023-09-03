import { test } from "../fixtures/dashboard-fixture";
import ProjectSettingsPage from "../pages/project-settings-page";
import ProjectsMenu from "../pages/projects-menu";


let projectsMenu: ProjectsMenu;
let projectSettingsPage: ProjectSettingsPage;

test.beforeEach(async ({ page, dashboardPage }) => {
  projectsMenu = new ProjectsMenu(page);
  await projectsMenu.clickProjectButton(1);
  await projectsMenu.clickSettingsButton();
  projectSettingsPage = new ProjectSettingsPage(page);
});

test.describe("Project settings page", () => {
  test("user can open project settings page @smoke", async () => {
    await projectSettingsPage.checkProjectSettingsHeadingVisible();
    await projectSettingsPage.checkPageVisual();
  });
});
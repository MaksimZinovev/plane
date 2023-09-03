import { test } from '../fixtures/dashboard-fixture';



test.beforeEach(async ({ dashboardPage }) => {
  await dashboardPage.checkHeading();
});

test.describe("Dashboard page", () => {
  test("check dashboard page", async ({ dashboardPage }) => {
    await test.step("user can open dashboard page", async () => {
      await dashboardPage.checkHeading();
    });
    await test.step("dashboard page visual check", async () => {
      await dashboardPage.checkPageVisual();
    });
  });
  test("check dashboard page test", async ({ dashboardPage }) => {
    await dashboardPage.checkUrl();

  });
});

import { test as setup } from '@playwright/test';
import { SignInPage } from '../ui/pages/signin-page';
import { DashboardPage } from '../ui/pages/dashboard-page';

import { STORAGE_STATE } from '../../playwright.config';

setup('do login', async ({ page }) => {
    const signInPage = new SignInPage(page);
    await signInPage.goto('/');

    await signInPage.fillEmail(process.env.USERNAME!);
    await signInPage.fillPassword(process.env.PASSWORD!);
    await signInPage.clickSignInButton();

    const dashboardPage = new DashboardPage(page);
    // Check title of dashboard page
    await dashboardPage.checkUrl();
    await dashboardPage.checkHeading();

    // Save storage state to file
    await dashboardPage.page.context().storageState({ path: STORAGE_STATE });

});
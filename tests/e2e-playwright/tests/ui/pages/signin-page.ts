import { type Page, type Locator, expect } from "@playwright/test";
const HEADING_TEXT: string = 'Sign in to Plane';


export class SignInPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly forgotPasswordButton: Locator;
    readonly signupButton: Locator;
    readonly heading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByPlaceholder('Enter your email address...');
        this.passwordInput = page.getByPlaceholder('Enter your password...');
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
        this.forgotPasswordButton = page.getByRole('button', { name: 'Forgot your password?' });
        this.signupButton = page.getByRole('link', { name: 'Don\'t have an account? Sign up.' });
        this.heading = page.getByRole('heading', { name: HEADING_TEXT });

    }

    async goto(url: string) {
        await this.page.goto(url);
    };

    async checkHeading() {
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText(HEADING_TEXT);
    }

    async checkSignInPageVisual() {
        await expect(this.page).toHaveScreenshot({ fullPage: true });
    }

    async fillEmail(email: string) {
        await this.emailInput.clear();
        await this.emailInput.fill(email);
    }
    async fillPassword(password: string) {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }
    async clickSignInButton() {
        await this.signInButton.click();
    }
}
export default SignInPage;
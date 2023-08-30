import { Locator, Page, expect } from "@playwright/test";

const DEFAULT_DIF_RATIO: number = 0.01;
const IS_FULL_PAGE: boolean = true;
const MASK_LOCATORS: Array<Locator> | undefined = undefined;

export async function expectScreenshot(
    page: Page, 
    fullPage: boolean = IS_FULL_PAGE,
    maxDiffPixelRatio: number = DEFAULT_DIF_RATIO,
    mask: Array<Locator> | undefined = MASK_LOCATORS
) {
    await expect(page).toHaveScreenshot({ fullPage, maxDiffPixelRatio , mask })
}
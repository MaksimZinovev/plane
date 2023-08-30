import { Locator, Page, expect } from "@playwright/test";
import { error } from "console";

const DEFAULT_DIF_RATIO: number = 0.02;
const IS_FULL_PAGE: boolean = true;
const MASK_LOCATORS: Array<Locator> | undefined = undefined;

export async function expectScreenshot(
    page: Page,
    fullPage: boolean = IS_FULL_PAGE,
    maxDiffPixelRatio: number = DEFAULT_DIF_RATIO,
    mask: Array<Locator> | undefined = MASK_LOCATORS
) {
    await expect(page).toHaveScreenshot({ fullPage, maxDiffPixelRatio, mask })
}

export function toUpperCaseFirstLetter(word: string) {
    if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
        throw new Error('Word parameter is required.')

    }

}


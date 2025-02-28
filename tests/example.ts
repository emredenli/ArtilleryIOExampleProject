import { expect, Page } from "@playwright/test";

export default async function (page: Page) {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
}

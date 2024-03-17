import { test, expect } from "@playwright/test";


test.describe("Visual Regression Testing Example", () => {
  test("Visual comparisons basic test", async ({ page }) => {
    await page.goto("https://www.24mx.pl");
    await expect(page).toHaveScreenshot("homepage.png");
    //expect(await page.screenshot()).toMatchSnapshot('homepage.png');
  });
});
  
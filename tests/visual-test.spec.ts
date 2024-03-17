import { test, expect } from "@playwright/test";

test.describe("Visual Regression Testing Example", () => {
//   test("Visual comparisons basic test", async ({ page }) => {
//     await page.goto("https://www.24mx.pl");
//     await expect(page).toHaveScreenshot("homepage.png");
//   });

  test("Visual comparisons basic test", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveScreenshot("homepage.png");
  });
});

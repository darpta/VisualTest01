import { test, expect } from "@playwright/test";
import { Akcesoria } from "../pages/akcesoria.page";

test("Visual comparisons Komplety Plastikow page", async ({ page }) => {
  // Arrange
  const akcesoriaPage = new Akcesoria(page);

  // Act
  await page.goto("https://www.24mx.pl");
  await akcesoriaPage.topMenu.akcesoriaButton.click();
  await akcesoriaPage.nawigacjaGpsInput.click();

  // Assert
  await expect(page).toHaveURL(/nawigacja-gps/);
  await expect(page).toHaveScreenshot("nawigacja-gps.png", {
    maxDiffPixelRatio: 0.1,
  });
});
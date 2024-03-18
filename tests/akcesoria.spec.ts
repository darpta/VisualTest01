import { test, expect } from "@playwright/test";
import { Akcesoria } from "../pages/akcesoria.page";

test("Visual comparisons Nawigacja GPS page", async ({ page }) => {
  // Arrange
  const akcesoriaPage = new Akcesoria(page);

  // Act
  await page.goto("/");
  await page.getByRole("button", { name: "OK" }).click();
  await akcesoriaPage.topMenu.akcesoriaButton.click();
  await akcesoriaPage.nawigacjaGpsInput.click();

  // Assert
  await expect(page).toHaveURL(/nawigacja-gps/);
  await expect(page).toHaveScreenshot("nawigacja-gps.png", {
    maxDiffPixelRatio: 0.1,
  });
});

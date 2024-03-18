import { test, expect } from "@playwright/test";
import { LifestyleOutdoor } from "../pages/lifestyle-outdoor.page";

test("Visual comparisons Kurtka Damska Raven Pit Coat page", async ({ page }) => {
  // Arrange
  const lifestyleOutdoorPage = new LifestyleOutdoor(page);
  const $kurtkiHiddenButton = await lifestyleOutdoorPage.kurtkiInput;

  // Act
  await page.goto("/");
  await page.getByRole("button", { name: "OK" }).click();
  await page.getByRole('link', { name: 'Lifestyle i Outdoor' }).click();
  await $kurtkiHiddenButton.evaluate((Node: HTMLElement) => Node.click())
  await lifestyleOutdoorPage.kurtkaDamskaRavenPitCoat.click();

  // Assert
  await expect(page).toHaveURL(/pid-PIA-293279/);
  await expect(page).toHaveScreenshot("lifestyle-outdoor.png", {
    maxDiffPixelRatio: 0.08,
  });
});
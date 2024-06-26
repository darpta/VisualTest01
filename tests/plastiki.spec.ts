import { test, expect } from "@playwright/test";
import { PlastikiOkleiny } from "../pages/plastiki-okleiny.page";

test("Visual comparisons Komplety Plastikow page", async ({ page }) => {
  // Arrange
  const plastikiPage = new PlastikiOkleiny(page);

  // Act
  await page.goto("/");
  await page.getByRole("button", { name: "OK" }).click();
  await plastikiPage.topMenu.plastikiOkleinyButton.click();
  await plastikiPage.kompletyPlastikowIinput.click();

  // Assert
  await expect(page).toHaveURL(/plastiki-i-okleiny/);
  await expect(page).toHaveScreenshot("plastiki-okleiny.png", {
    maxDiffPixelRatio: 0.08,
  });
});

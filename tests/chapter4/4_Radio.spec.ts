import { test, expect } from '@playwright/test'

test('handling the radio', async ({ page }) => {

    await page.goto('https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php')

    await expect(page.locator('#pension')).not.toBeChecked();

    await page.locator('#pension').check();
    await expect(page.locator('#pension')).toBeChecked();

    await page.waitForTimeout(3000)


    const boxes = page.locator("div > input[type='checkbox']");
    await expect(boxes).toHaveCount(4); // optional sanity check

    const count = await boxes.count();
    for (let i = 0; i < count; i++) {
        const box = boxes.nth(i);
        await expect(box).not.toBeChecked();
        await box.check();
        await expect(box).toBeChecked();
    }

})
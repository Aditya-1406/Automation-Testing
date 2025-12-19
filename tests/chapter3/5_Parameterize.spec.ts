import { test, expect } from '@playwright/test'


const data = ['hello', 'world', 'admin']

for (const i of data) {
    test(`Handling the mouse actions ${i}`, async ({ page }) => {


        await page.goto("https://testautomationpractice.blogspot.com/")


        await page.locator('[id="Wikipedia1_wikipedia-search-input"]').click()
        await page.locator('[id="Wikipedia1_wikipedia-search-input"]').fill(i) // passing parameterized data
        await page.keyboard.press('Enter')
        await page.waitForTimeout(3000)

        await page.keyboard.press('Control+A')
        await page.keyboard.press('Delete')
        await page.waitForTimeout(3000)

        await page.keyboard.press('Tab')
        await page.keyboard.press('Enter')
        await page.waitForTimeout(3000)
    })
}
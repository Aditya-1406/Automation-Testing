import { test, expect } from '@playwright/test'


test.describe("Smoke Testing", () => {
    test("test1", async ({ page }) => {


        await page.goto("https://testautomationpractice.blogspot.com/")

        // left click 

        await page.locator('[id="Wikipedia1_wikipedia-search-input"]').click()
        await page.locator('[id="Wikipedia1_wikipedia-search-input"]').fill("hello")
        await page.keyboard.press('Enter')
        await page.waitForTimeout(3000)

        await page.keyboard.press('Control+A')
        await page.keyboard.press('Delete')
        await page.waitForTimeout(3000)

        await page.keyboard.press('Tab')
        await page.keyboard.press('Enter')
        await page.waitForTimeout(3000)
    })
})



test.describe("Regression Testing", () => {
    test("test2", async ({ page }) => {


        await page.goto("https://testautomationpractice.blogspot.com/")

        // left click 

        await page.locator('[id="Wikipedia1_wikipedia-search-input"]').click()
        await page.locator('[id="Wikipedia1_wikipedia-search-input"]').fill("hello")
        await page.keyboard.press('Enter')
        await page.waitForTimeout(3000)

        await page.keyboard.press('Control+A')
        await page.keyboard.press('Delete')
        await page.waitForTimeout(3000)

        await page.keyboard.press('Tab')
        await page.keyboard.press('Enter')
        await page.waitForTimeout(3000)
    })

    test("test3", async ({ page }) => {


        await page.goto("https://testautomationpractice.blogspot.com/")

        // left click 

        await page.locator('[id="Wikipedia1_wikipedia-search-input"]').click()
        await page.locator('[id="Wikipedia1_wikipedia-search-input"]').fill("hello")
        await page.keyboard.press('Enter')
        await page.waitForTimeout(3000)

        await page.keyboard.press('Control+A')
        await page.keyboard.press('Delete')
        await page.waitForTimeout(3000)

        await page.keyboard.press('Tab')
        await page.keyboard.press('Enter')
        await page.waitForTimeout(3000)
    })

})




import {test,expect} from '@playwright/test'


test("Validating the dropdown",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")

   await page.locator("//input[@id='comboBox']").click()

   await page.waitForTimeout(3000)

   await page.locator("//div[@id='dropdown']").getByText('Item 1',{exact:true}).click()
//    use selectoption if dropdown has a select tag
    await expect(page.locator("#dropdown > .option")).toContainText(["Item 1", "Item 2", "Item 3"])
})
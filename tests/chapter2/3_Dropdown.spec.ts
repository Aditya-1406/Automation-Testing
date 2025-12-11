import {test,expect} from '@playwright/test'


test("Validating the dropdown",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")

   await page.locator("//input[@id='comboBox']").click()

   await page.locator("//div[@id='dropdown']").getByText('Item 1',{exact:true}).click()
//    use selectoption if dropdown has a select tag

    //printing all the values of the dropdown
    const dop = await page.locator("#dropdown > .option").allTextContents()
    console.log(dop)

    await expect(page.locator("#dropdown > .option")).toContainText(["Item 1", "Item 2", "Item 3"])
})
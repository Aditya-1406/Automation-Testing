import {test,expect} from '@playwright/test'


test("Validating the datefield",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")

   //Hardcoded date value 

   await page.locator("[id='datepicker']").fill("12/13/2025")
   await page.waitForTimeout(3000)

   // Dynamically date value

    await page.locator("[id='datepicker']").click()
   await page.locator(".ui-datepicker-today").click()
   await page.waitForTimeout(3000)

   // Selecting the past date
   await page.locator("[id='datepicker']").click()
   await page.getByTitle("Prev").click()
   await page.getByTestId("1").click()
   await page.waitForTimeout(3000)

   
})